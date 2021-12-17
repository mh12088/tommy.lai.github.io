import { Injectable } from '@angular/core';
import { User, ClientDataObj, DecodedAttestionObj, DecodedPublicKeyCredential } from '../model/web-authn.model';
import * as CBOR from '../utils/cbor';
import * as uuid from 'uuid';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
@Injectable({
    providedIn: 'root'
})
export class MockService {
    userList: User[] = [];

    constructor() { }

    genUUID() {
        return uuid.v4();
    }

    // Should generate from server
    getChallenge() {
        const challenge = new Uint8Array(32);
        return window.crypto.getRandomValues(challenge);
    }

    getAllUser() {
        return this.userList;
    }

    validateCreateUser(user: User) {
        const errorMsgList: string[] = [];
        if (this.getUserByEmail(user.email)) {
            errorMsgList.push("Email is already registered");
        }
        if (this.getUserByMobileNumber(user.mobileNumber)) {
            errorMsgList.push("Mobile Number is already registered");
        }
        return errorMsgList;
    }

    createUser(user: User) {
        this.userList.push(user);
        return this.getUserByMobileNumber(user.mobileNumber);
    }

    deleteUser(user: User) {
        this.userList.splice(this.getUserIndex(user), 1);
    }

    getUserIndex(user: User) {
        return this.userList.findIndex(item => item.mobileNumber === user.mobileNumber);
    }

    getUserByMobileNumber(mobileNumber: string) {
        return this.userList.find(user => user.mobileNumber === mobileNumber);
    }

    getUserByEmail(email: string) {
        return this.userList.find(user => user.email === email);
    }


    updateUser(user: User) {
        const userIndex = this.getUserIndex(user);
        this.userList[userIndex] = user;
        return this.userList[userIndex];
    }

    // Validate and Store credential
    registerCredential(user: User, credential: PublicKeyCredential): boolean {
        const authData = this.extractAuthData(credential);
        const credentialIdLength = this.getCredentialIdLength(authData);
        const credentialId: Uint8Array = authData.slice(55, 55 + credentialIdLength);
        console.log('----------credentialIdLength----------');
        console.log(credentialIdLength);
        console.log('----------credentialId----------');
        console.log(credentialId);
        const publicKeyBytes: Uint8Array = authData.slice(55 + credentialIdLength);
        console.log('----------publicKeyBytes----------');
        console.log(JSON.stringify(publicKeyBytes));
        const publicKeyObject = CBOR.decode(publicKeyBytes.buffer);
        console.log('----------publicKeyObject----------');
        console.log(JSON.stringify(publicKeyObject));

        const valid = true;
        if (valid) {
            // Save publicKeyBytes and credentialId
            user.credentials.push({ credentialId, publicKey: publicKeyBytes });
            this.updateUser(user);
        }
        return valid;
    }

    extractAuthData(credential: PublicKeyCredential): Uint8Array {
        console.log("---------Client Data JSON----------")
        console.log(JSON.stringify(credential.response.clientDataJSON));
        // decode the clientDataJSON into a utf-8 string
        const utf8Decoder = new TextDecoder('utf-8');
        const decodedClientData = utf8Decoder.decode(credential.response.clientDataJSON);

        const clientDataObj: ClientDataObj = JSON.parse(decodedClientData);
        // console.log('----------clientDataObj----------');
        // console.log(JSON.stringify(clientDataObj));

        const decodedAttestationObj: DecodedAttestionObj = CBOR.decode((credential.response as any).attestationObject);
        // console.log('----------decodedAttestationObj----------');
        // console.log(JSON.stringify(decodedAttestationObj));
        const { authData } = decodedAttestationObj;
        // console.log('authData', authData);
        const DecodedPublicKeyCredential: DecodedPublicKeyCredential = {
            id: credential.id,
            rawId: btoa(String.fromCharCode(...new Uint8Array(credential.rawId))),
            response: {
                clientDataJSON: clientDataObj,
                attestationObject: decodedAttestationObj,
            },
            type: credential.type,
        };
        console.log("----------DecodedPublicKeyCredential----------");
        console.log(JSON.stringify(DecodedPublicKeyCredential));
        return authData;
    }

    getCredentialIdLength(authData: Uint8Array): number {
        // get the length of the credential ID
        const dataView = new DataView(new ArrayBuffer(2));
        const idLenBytes = authData.slice(53, 55);
        idLenBytes.forEach((value, index) => dataView.setUint8(index, value));
        return dataView.getUint16(0);
    }

    arrayBufferToStr(buf) {
        let decoder = new TextDecoder("utf-8");
        return decoder.decode(buf);
    }

    decodeAssertion(assertion) {
        let clientDataStr = this.arrayBufferToStr(assertion.response.clientDataJSON);
        let clientDataObj: ClientDataObj = JSON.parse(clientDataStr);
        console.log("----------Sign in clientDataObj----------")
        console.log(JSON.stringify(clientDataObj));
        const userHandle = this.arrayBufferToStr(assertion.response.userHandle);
        console.log("----------User Handle----------")
        console.log(userHandle);
    }
}
