import { Injectable } from '@angular/core';
import { MockService } from './mock-service';
import { User } from '../model/web-authn.model';

@Injectable({
  providedIn: 'root'
})
export class WebAuthnService {

  constructor(private mockService: MockService) { }
  webAuthnSignup(user: User): Promise<Credential> {
    const challenge: string = this.mockService.genUUID();
    console.log("----------Sign up challenge----------");
    console.log(challenge);
    const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions = {
      // Should generate from server
      challenge: Uint8Array.from(challenge, c => c.charCodeAt(0)),
      // Relying Party
      rp: {
        name: "demo",
        // id: "" // domain
      },
      user: {
        // Some user id coming from the server
        id: Uint8Array.from(user.mobileNumber, c => c.charCodeAt(0)),
        name: user.email,
        displayName: user.email,
      },
      pubKeyCredParams: [{ alg: -7, type: 'public-key' }],
      authenticatorSelection: {
        authenticatorAttachment: 'platform',
        // requireResidentKey: true,
      },
      timeout: 100000,
      attestation: 'direct'
    };
    console.log("----------Sign up Payload----------");
    console.log(JSON.stringify(publicKeyCredentialCreationOptions));
    return navigator.credentials.create({
      publicKey: publicKeyCredentialCreationOptions,
    });
  }

  webAuthnSignin(user: User): Promise<Credential> {
    const allowCredentials: PublicKeyCredentialDescriptor[] = user.credentials.map(c => {
      console.log(c.credentialId);
      return { transports: ['internal'], type: 'public-key', id: new Uint8Array(this.mockService.base64ToArrayBuffer(c.credentialIdString))
      // id: Uint8Array.from(c.credentialId)
     };
    });

    console.log("----------Sign in challenge----------");
    const challenge: string = this.mockService.genUUID();
    console.log(challenge);
    const credentialRequestOptions: PublicKeyCredentialRequestOptions = {
      challenge: Uint8Array.from(challenge, c => c.charCodeAt(0)),
      allowCredentials,
    };
    console.log("----------Sign in Payload----------")
    console.log(JSON.stringify(credentialRequestOptions));

    return navigator.credentials.get({
      publicKey: credentialRequestOptions,
    });
  }
}
