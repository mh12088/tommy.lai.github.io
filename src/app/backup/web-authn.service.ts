import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { from, of } from 'rxjs';
import { DecodedAttestionObj, User } from 'src/app/models/web-authn.model';
import * as CBOR from 'src/app/utils/cbor';
import { catchError, finalize, switchMap } from 'rxjs/operators';
import { MockService } from '../services/mock.service';
@Injectable()
export class WebAuthnService {
    constructor(private mockService: MockService) {
    }

    private generateUUIDv4() {
        return (`${[1e7]}${-1e3}${-4e3}${-8e3}${-1e11}`).replace(/[018]/g, (c: any) =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    private getChallenge(): Observable<any> {
        return of(this.generateUUIDv4());
    }

    private publicKeyCredentialToBase64Url(publicKeyCred) {
        if (publicKeyCred instanceof ArrayBuffer) {
            return this.base64urlEncode(publicKeyCred);
        } else if (publicKeyCred instanceof Array) {
            return publicKeyCred.map(this.publicKeyCredentialToBase64Url);
        } else if (publicKeyCred instanceof Object) {
            const obj = {};
            for (let key in publicKeyCred) {
                obj[key] = this.publicKeyCredentialToBase64Url(publicKeyCred[key]);
            }
            return obj;
        } else return publicKeyCred;
    }

    private base64urlEncode(arraybuffer) {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
        // Use a lookup table to find the index.
        let lookup = new Uint8Array(256);
        for (let i = 0; i < chars.length; i++) {
            lookup[chars.charCodeAt(i)] = i;
        }
        let bytes = new Uint8Array(arraybuffer),
            i, len = bytes.length, base64 = "";

        for (i = 0; i < len; i += 3) {
            base64 += chars[bytes[i] >> 2];
            base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
            base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
            base64 += chars[bytes[i + 2] & 63];
        }

        if ((len % 3) === 2) {
            base64 = base64.substring(0, base64.length - 1);
        } else if (len % 3 === 1) {
            base64 = base64.substring(0, base64.length - 2);
        }

        return base64;
    }

    private signup(credential): Observable<any> {
        return of("signup");
    }

    private webAuthnSignup(user: User, challenge: string): Promise<Credential> {
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
                authenticatorAttachment: "platform",
                userVerification: "required"
            },
            timeout: 100000,
            attestation: 'direct'
        };
        return navigator.credentials.create({
            publicKey: publicKeyCredentialCreationOptions,
        });
    }

    private signin(credential): Observable<any> {
        return of("signin");
    }

    private webAuthnSignin(user: User, challenge: string): Promise<Credential> {
        const allowCredentials: PublicKeyCredentialDescriptor[] = user.credentials.map(c => {
            return {
                transports: ['internal'], type: 'public-key',
                // id: new Uint8Array(this.mockService.base64ToArrayBuffer(c.credentialIdString))
                id: Uint8Array.from(c.credentialId),
            };
        });

        const credentialRequestOptions: PublicKeyCredentialRequestOptions = {
            challenge: Uint8Array.from(challenge, c => c.charCodeAt(0)),
            allowCredentials,
            userVerification: "required"
        };
        console.log("----------Sign in Payload----------")
        console.log(JSON.stringify(credentialRequestOptions));

        return navigator.credentials.get({
            publicKey: credentialRequestOptions,
        });
    }


    private isSupportBiometricLogin(): Observable<boolean> {
        if (window.PublicKeyCredential) {
            return from(new Promise<boolean>((resolve, reject) => {
                PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
                    .then(available => {
                        if (available) {
                            // console.log("Supported.");
                            resolve(true);
                        } else {
                            // console.log("WebAuthn supported, Platform Authenticator *not* supported.");
                            resolve(false);
                        }
                    })
                    .catch(error => {
                        // console.log("Something went wrong.");
                        resolve(false);
                    })
            }));
        } else {
            // console.log("Not supported.");
            return of(false);
        }
    };

    signupFlow(user): Observable<any> {
        return this.getChallenge().pipe(
            switchMap(challenge => {
                return from(
                    this.webAuthnSignup(user, challenge)
                        .then((credential: any) => {
                            const credentialBase64Url = this.publicKeyCredentialToBase64Url(credential);
                            Promise.resolve(credentialBase64Url)
                        })
                        .catch(error => Promise.reject(error))
                )
            }),
            switchMap(credentialBase64Url => {
                return this.signup(credentialBase64Url);
            }),
            catchError(error => {
                // handle error
                return of(error);
            }),
            finalize(() => console.log("test"))
        );
    };

    signinFlow(user: any): Observable<any> {
        return this.getChallenge().pipe(
            switchMap(challenge => {
                return from(this.webAuthnSignin(user, challenge)
                    .then(assertion => {
                        const credentialBase64Url = this.publicKeyCredentialToBase64Url(assertion);
                        Promise.resolve(credentialBase64Url);
                    })
                    .catch(error => Promise.reject(error))
                )
            }),
            switchMap(credentialBase64Url => {
                return this.signin(credentialBase64Url);
            }),
            catchError(error => {
                // handle error 
                return of(error)
            })
        );
    };

    // ----------------------------------------------------------------------------------------------------------


    // Validate and Store credential
    registerCredential(credential: PublicKeyCredential): Uint8Array {
        const authData = this.extractAuthData(credential);
        const credentialIdLength = this.getCredentialIdLength(authData);
        const credentialId: Uint8Array = authData.slice(55, 55 + credentialIdLength);
        const publicKeyBytes: Uint8Array = authData.slice(55 + credentialIdLength);
        // const publicKeyObject = CBOR.decode(publicKeyBytes.buffer);
        const valid = true;
        if (valid) {
            // Save publicKeyBytes and credentialId
            return credentialId;
        }
    }

    extractAuthData(credential: PublicKeyCredential): Uint8Array {
        const decodedAttestationObj: DecodedAttestionObj = CBOR.decode((credential.response as any).attestationObject);
        const { authData } = decodedAttestationObj;
        return authData;
    }

    getCredentialIdLength(authData: Uint8Array): number {
        // get the length of the credential ID
        const dataView = new DataView(new ArrayBuffer(2));
        const idLenBytes = authData.slice(53, 55);
        idLenBytes.forEach((value, index) => dataView.setUint8(index, value));
        return dataView.getUint16(0);
    }
}