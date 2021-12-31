import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './model/web-authn.model';
import { MockService } from './service/mock-service';
import { TestService } from './service/test-service';
import { WebAuthnService } from './service/web-authn-service';

@Component({
  selector: 'app-web-authn',
  templateUrl: './web-authn.component.html',
  styleUrls: ['./web-authn.component.scss']
})
export class WebAuthnComponent implements OnInit {
  errorMsg: string = "";
  userList: User[] = [];
  userForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    mobileNumber: new FormControl("", [Validators.required, Validators.pattern("^[0-9]{8}$")]),
    isEnableBiometricLogin: new FormControl(),
  });
  deviceId: string;
  isRegistered: boolean = false;

  constructor(
    private mockService: MockService,
    private webAuthnService: WebAuthnService,
    private testService: TestService,
  ) { }

  ngOnInit(): void {
    this.userList = this.mockService.getAllUser();
    this.deviceId = localStorage.getItem("device_id") || "";
    if(this.deviceId){
      const user = this.userList.find(user => user.deviceId === this.deviceId);
      if(user && user.credentials.length > 0) this.isRegistered = true;
    }
  }

  get email(): any {
    return this.userForm.get('email');
  }

  get mobileNumber(): any {
    return this.userForm.get('mobileNumber');
  }

  get isEnableBiometricLogin(): any {
    return this.userForm.get('isEnableBiometricLogin')
  }

  signup(): void {
    const user: User = {
      mobileNumber: this.userForm.get('mobileNumber').value,
      email: this.userForm.get('email').value,
      credentials: [],
      deviceId: this.deviceId,
    };
    const errorMsgList = this.mockService.validateCreateUser(user);
    if (errorMsgList.length > 0) {
      alert(errorMsgList.toString());
      return;
    }
    const userFromDB = this.mockService.createUser(user);
    this.userList = this.mockService.getAllUser();
    alert("Your Account Has been Created.");
    if (this.userForm.get('isEnableBiometricLogin').value) {
      alert("Enable biometric login...");
      this.webAuthnSignup(userFromDB);
    }
  }

  webAuthnSignup(user: User): void {
    // Ask for WebAuthn Auth method
    this.webAuthnService.webAuthnSignup(user)
      .then((credential: any) => {
        console.log("---------Credentials Create response---------");
        console.log(JSON.stringify(credential));
        // Call server to validate and save credential
        // Hardcoded on frontend
        console.log("---------Public key Resonse----------");
        console.log(credential);
        const obj = {
          id: credential.id,
          type: credential.type,
          response: {
            attestationObject: null,
            clientDataJSON: null
          },
          rawId: null
        };
        obj.response.attestationObject = new Uint8Array(credential.response.attestationObject);
        obj.response.clientDataJSON = new Uint8Array(credential.response.clientDataJSON);
        obj.rawId = new Uint8Array(credential.rawId);
        console.log(JSON.stringify(obj));
        console.log("---------Public key Resonse(URLBase64)----------");
        const urlbase64 = this.mockService.encodePublicKeyCredential(credential);
        console.log(JSON.stringify(urlbase64));
        console.log(JSON.stringify(this.mockService.bufferDecode(urlbase64.response.clientDataJSON)));
        console.log(JSON.stringify(this.mockService.bufferDecode(urlbase64.response.attestationObject)));
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

  signin(user?: User) {
    let userFromDB: any = {credentials: []};
    if (user) {
      userFromDB = this.mockService.getUserByMobileNumber(user.mobileNumber);
    } else {
      userFromDB = this.mockService.getUserByDeviceId(this.deviceId);
    };

    console.log("----------Saved User:----------");
    console.log(JSON.stringify(userFromDB));
    this.webAuthnService.webAuthnSignin(userFromDB)
      .then((assertion: any) => {
        alert("Authentication Successful");
        console.log("----------Assertion response----------");
        console.log(assertion);
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


  savePublicKey() {
    this.testService.savePublicKey().subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error);
      });
  }
}
