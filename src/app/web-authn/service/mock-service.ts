import { Injectable } from '@angular/core';
import { User, ClientDataObj, DecodedAttestionObj } from '../model/web-authn.model';
import * as CBOR from '../utils/cbor';

@Injectable({
    providedIn: 'root'
})
export class MockService {
    userList: User[] = [];

    constructor() { }

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
        // console.log('credentialIdLength', credentialIdLength);
        // console.log('credentialId', credentialId);
        const publicKeyBytes: Uint8Array = authData.slice(55 + credentialIdLength);
        const publicKeyObject = CBOR.decode(publicKeyBytes.buffer);
        // console.log('publicKeyObject', publicKeyObject);

        const valid = true;
        if (valid) {
            // Save publicKeyBytes and credentialId
            user.credentials.push({ credentialId, publicKey: publicKeyBytes });
            alert(JSON.stringify(user));
            this.updateUser(user);
        }
        return valid;
    }

    extractAuthData(credential: PublicKeyCredential): Uint8Array {
        // decode the clientDataJSON into a utf-8 string
        const utf8Decoder = new TextDecoder('utf-8');
        const decodedClientData = utf8Decoder.decode(credential.response.clientDataJSON);

        const clientDataObj: ClientDataObj = JSON.parse(decodedClientData);
        // console.log('clientDataObj', clientDataObj);

        const decodedAttestationObj: DecodedAttestionObj = CBOR.decode((credential.response as any).attestationObject);
        // console.log('decodedAttestationObj', decodedAttestationObj);

        const { authData } = decodedAttestationObj;
        // console.log('authData', authData);

        return authData;
    }

    getCredentialIdLength(authData: Uint8Array): number {
        // get the length of the credential ID
        const dataView = new DataView(new ArrayBuffer(2));
        const idLenBytes = authData.slice(53, 55);
        idLenBytes.forEach((value, index) => dataView.setUint8(index, value));
        return dataView.getUint16(0);
    }

    decodeArrayBuffer(arrayBuffer) {
        return String.fromCharCode.apply(null, arrayBuffer);
    }

    // UTF-8 Decode
    decodeClientDataJSON(credential) {
        const utf8Decoder = new TextDecoder('utf-8');
        const decodedClientData = utf8Decoder.decode(
            credential.response.clientDataJSON);
        const clientDataObj = JSON.parse(decodedClientData);
        return clientDataObj;
    }

    // CBOR Decode
    decodeAttestationObject(credential) {
        const decodedAttestationObj: DecodedAttestionObj = CBOR.decode(credential.response.attestationObject);
        // console.log(decodedAttestationObj);
        const { authData } = decodedAttestationObj;
        const credentialIdLength = this.getCredentialIdLength(authData);
        // get the credential ID
        const credentialId = authData.slice(55, credentialIdLength);
        // get the public key object
        const publicKeyBytes = authData.slice(55 + credentialIdLength);
        // the publicKeyBytes are encoded again as CBOR
        const publicKeyObject = CBOR.decode(publicKeyBytes.buffer);
        const decodedAttestationObject = {
            authData: {
                credentialId,
                publicKeyBytes,
                publicKeyObject
            },
            fmt: decodedAttestationObj.fmt,
        }
        return decodedAttestationObject;
    }

}
