import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { User } from '../model/web-authn.model';
import { MockService } from './mock-service';
@Injectable()
export class MockV2Service {
    constructor(private mockService: MockService) {
    }

    getChallenge(): Observable<any> {
        return of("getChallenge");
    }

    signup(credential): Observable<any> {
        return of("signup");
    }

    webAuthnSignup(user: User, challenge: string): Promise<Credential> {
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
        return navigator.credentials.create({
            publicKey: publicKeyCredentialCreationOptions,
        });
    }

    signin(credential): Observable<any> {
        return of("signin");
    }

    webAuthnSignin(user: User, challenge: string): Promise<Credential> {
        const allowCredentials: PublicKeyCredentialDescriptor[] = user.credentials.map(c => {
            return {
                transports: ['internal'], type: 'public-key', id: new Uint8Array(this.mockService.base64ToArrayBuffer(c.credentialIdString))
                // id: Uint8Array.from(c.credentialId)
            };
        });

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