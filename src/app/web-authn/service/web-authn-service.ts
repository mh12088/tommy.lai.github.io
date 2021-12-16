import { Injectable } from '@angular/core';
import { MockService } from './mock-service';
import { User } from '../model/web-authn.model';

@Injectable({
  providedIn: 'root'
})
export class WebAuthnService {

  constructor(private mockService: MockService) { }

  webAuthnSignup(user: User): Promise<Credential> {
    const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions = {
      // Should generate from server
      challenge: this.mockService.getChallenge(),
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
    console.log(publicKeyCredentialCreationOptions);
    return navigator.credentials.create({
      publicKey: publicKeyCredentialCreationOptions,
    });
  }

  webAuthnSignin(user: User): Promise<Credential> {
    const allowCredentials: PublicKeyCredentialDescriptor[] = user.credentials.map(c => {
      console.log(c.credentialId);
      return { transports: ['internal'], type: 'public-key', id: Uint8Array.from(Object.values(c.credentialId)) };
    });

    console.log("----------Sign in Payload----------")
    console.log(JSON.stringify(allowCredentials));

    const credentialRequestOptions: PublicKeyCredentialRequestOptions = {
      challenge: this.mockService.getChallenge(),
      allowCredentials,
    };

    return navigator.credentials.get({
      publicKey: credentialRequestOptions,
    });
  }
}
