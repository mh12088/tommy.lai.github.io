import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { from, Observable, of } from 'rxjs';
import { MockService } from 'src/app/services/mock.service';
import { User } from 'src/app/models/web-authn.model';
import { WebAuthnMockService } from 'src/app/services/web-authn-mock.service';

@Component({
  selector: 'app-web-authn-mock',
  templateUrl: './web-authn-mock.component.html',
  styleUrls: ['./web-authn-mock.component.scss']
})
export class WebAuthnMockComponent implements OnInit {
  errorMsg: string = "";
  userList: User[] = [];
  userForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    mobileNumber: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    isEnableBiometricLogin: new FormControl(),
  });
  deviceId: string;
  isRegistered: boolean = false;
  savedCredentialId: Uint8Array;
  authenticator: any = {};

  constructor(
    private mockService: MockService,
    private webAuthnMockService: WebAuthnMockService
  ) { }

  get email(): any {
    return this.userForm.get('email');
  }

  get mobileNumber(): any {
    return this.userForm.get('mobileNumber');
  }

  get isEnableBiometricLogin(): any {
    return this.userForm.get('isEnableBiometricLogin')
  }

  ngOnInit(): void {
    this.userList = this.mockService.getAllUser();
    this.deviceId = localStorage.getItem("device_id") || "";
    if (this.deviceId) {
      const user = this.userList.find(user => user.deviceId === this.deviceId);
      if (user && user.credentials.length > 0) this.isRegistered = true;
    }
  }

  enableBiometricLogin(user: User): void {
    if (user.credentials.length === 0) {
      const isConfirm = confirm("Are you sure you want to enable biometric login?");
      if (isConfirm) this.webAuthnSignup(user);
    } else {
      const isConfirm = confirm("Are you sure you want to disable biometric login?");
      if (isConfirm) {
        user.credentials = [];
        this.mockService.updateUser(user);
      }
    }
  }

  deleteAccount(user: User): void {
    const isConfirm = confirm(`Are you sure you want to delete this user (${user.email})?`);
    if (isConfirm) this.mockService.deleteUser(user);
  }


  isSupportBiometricLogin(): Observable<boolean> {
    if (window.PublicKeyCredential) {
      return from(new Promise<boolean>((resolve, reject) => {
        PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
          .then(available => {
            if (available) {
              console.log("Supported.");
              resolve(true);
            } else {
              console.log("WebAuthn supported, Platform Authenticator *not* supported.");
              resolve(false);
            }
          })
          .catch(error => {
            console.log("Something went wrong.");
            resolve(false);
          })
      }));
    } else {
      console.log("Not supported.");
      return of(false);
    }
  }

  signup(): void {
    const user: User = {
      mobileNumber: this.mobileNumber.value,
      email: this.email.value,
      credentials: [],
      deviceId: this.deviceId,
    };
    // Duplicate user create Checking
    const errorMsgList = this.mockService.validateCreateUser(user);
    if (errorMsgList.length > 0) {
      alert(errorMsgList.toString());
      return;
    }
    const userFromDB = this.mockService.createUser(user);
    this.userList = this.mockService.getAllUser();
    alert("Your Account Has been Created.");
    const isEnableBiometricLogin = this.isEnableBiometricLogin.value;
    if (isEnableBiometricLogin) {
      alert("Enable biometric login...");
      this.webAuthnSignup(userFromDB);
    }
  }

  private webAuthnSignup(user: User): void {
    // Ask for WebAuthn Auth method
    this.webAuthnMockService.signup(user)
      .then((credential: any) => {
        console.log("---------Credentials Create response---------");
        console.log(JSON.stringify(credential));
        // Call server to validate and save credential
        // Hardcoded on frontend
        console.log("---------Public key Resonse----------");
        console.log(credential);
        console.log("---------Public key Resonse(URLBase64)----------");
        const urlbase64 = this.mockService.decodePublicKeyCredentialToBase64String(credential);
        console.log(JSON.stringify(urlbase64));
        console.log("---------Public key Resonse(decoded)----------");
        console.log(JSON.stringify(this.mockService.decodePublicKeyCredential(credential)));
        const valid = this.mockService.registerCredential(user, credential);
        if (valid) {
          alert("Registration Successful");
        } else {
          alert("Registration Failed");
        }
      })
      .catch((error) => {
        this.errorMsg = error;
        console.log("Credentials Create Error: ", error);
      });
  }

  signin(user?: User) {
    let userFromDB: any = { credentials: [] };
    if (user) {
      userFromDB = this.mockService.getUserByMobileNumber(user.mobileNumber);
    } else {
      userFromDB = this.mockService.getUserByDeviceId(this.deviceId);
    };

    console.log("----------Saved User:----------");
    console.log(JSON.stringify(userFromDB));
    console.log(userFromDB);
    this.webAuthnMockService.signin(userFromDB)
      .then((assertion: any) => {
        alert("Authentication Successful");
        console.log("----------Assertion response----------");
        console.log(assertion);

        console.log("---------Public key Resonse(URLBase64)----------");
        const urlbase64 = this.mockService.decodePublicKeyCredentialToBase64String(assertion);
        console.log(JSON.stringify(urlbase64));

        // Mock payload
        const obj = {
          id: assertion.id,
          type: assertion.type,
          response: {
            authenticatorData: null,
            clientDataJSON: null,
            signature: null,
            userHandle: null,
          },
          rawId: null
        };
        obj.response.authenticatorData = new Uint8Array(assertion.response.authenticatorData);
        obj.response.clientDataJSON = new Uint8Array(assertion.response.clientDataJSON);
        obj.response.signature = new Uint8Array(assertion.response.signature);
        obj.response.userHandle = new Uint8Array(assertion.response.userHandle);
        obj.rawId = new Uint8Array(assertion.rawId);
        console.log(JSON.stringify(obj));
        this.mockService.decodeAssertion(assertion);
        // TODO: Call server to validate assertion
        // When server return ok,login successful else login failed
      })
      .catch((error) => {
        alert("Authentication Failed");
        this.errorMsg = error;
        console.log("Authentication Failed: ", error);
      });
  }
}