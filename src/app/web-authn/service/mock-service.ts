import { Injectable } from '@angular/core';
import { User, ClientDataObj, DecodedAttestionObj, DecodedPublicKeyCredential } from '../model/web-authn.model';
import * as CBOR from '../utils/cbor';
import * as base64js from '../utils/base64';
import * as uuid from 'uuid';
@Injectable({
    providedIn: 'root'
})
export class MockService {
    userList: User[] = localStorage.getItem("user_list") ? JSON.parse(localStorage.getItem("user_list")) : [];

    constructor() { }

    getUserByDeviceId(deviceId: string) {
        return this.userList.find(user => user.deviceId === deviceId);
    }

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

    saveChanges() {
        localStorage.setItem("user_list", JSON.stringify(this.userList));
    }

    createUser(user: User) {
        this.userList.push(user);
        this.saveChanges();
        return this.getUserByMobileNumber(user.mobileNumber);
    }

    deleteUser(user: User) {
        this.userList.splice(this.getUserIndex(user), 1);
        this.saveChanges();
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
        this.saveChanges();
        return this.userList[userIndex];
    }

    base64urlEncode(arraybuffer) {
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

    base64urlDecode(base64) {
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
        // Use a lookup table to find the index.
        var lookup = new Uint8Array(256);
        for (let i = 0; i < chars.length; i++) {
            lookup[chars.charCodeAt(i)] = i;
        }
        let bufferLength = base64.length * 0.75,
            len = base64.length, i, p = 0,
            encoded1, encoded2, encoded3, encoded4;

        let arraybuffer = new ArrayBuffer(bufferLength),
            bytes = new Uint8Array(arraybuffer);

        for (i = 0; i < len; i += 4) {
            encoded1 = lookup[base64.charCodeAt(i)];
            encoded2 = lookup[base64.charCodeAt(i + 1)];
            encoded3 = lookup[base64.charCodeAt(i + 2)];
            encoded4 = lookup[base64.charCodeAt(i + 3)];

            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
        }

        return arraybuffer;
    };

    decodePublicKeyCredentialToBase64String(pubKeyCred) {
        if (pubKeyCred instanceof ArrayBuffer) {
            return this.base64urlEncode(pubKeyCred);
        } else if (pubKeyCred instanceof Array) {
            return pubKeyCred.map(this.decodePublicKeyCredentialToBase64String);
        } else if (pubKeyCred instanceof Object) {
            const obj = {};
            for (let key in pubKeyCred) {
                obj[key] = this.decodePublicKeyCredentialToBase64String(pubKeyCred[key]);
            }
            return obj;
        } else return pubKeyCred;
    }

    decodePublicKeyCredential(credential: PublicKeyCredential) {
        const obj = {};
        for (let key in credential) {
            switch (key) {
                case "id":
                case "type":
                    obj[key] = credential[key];
                    break;
                case "rawId":
                    obj[key] = this.arrayBufferToBase64(credential[key])
                    break;
                case "response":
                    const utf8Decoder = new TextDecoder('utf-8');
                    const decodedClientData = utf8Decoder.decode(credential.response.clientDataJSON);
                    const clientDataObj: ClientDataObj = JSON.parse(decodedClientData);
                    const decodedAttestationObj: DecodedAttestionObj = CBOR.decode((credential.response as any).attestationObject);
                    obj[key] = {};
                    obj[key]["clientDataJSON"] = clientDataObj;
                    obj[key]["attestationObject"] = decodedAttestationObj;
                    break;
                default:
                    break;
            }
        }
        return obj;
    }

    // Validate and Store credential
    registerCredential(user: User, credential: PublicKeyCredential): boolean {
        const authData = this.extractAuthData(credential);
        const credentialIdLength = this.getCredentialIdLength(authData);
        const credentialId: Uint8Array = authData.slice(55, 55 + credentialIdLength);
        const publicKeyBytes: Uint8Array = authData.slice(55 + credentialIdLength);
        // const publicKeyObject = CBOR.decode(publicKeyBytes.buffer);
        const valid = true;
        if (valid) {
            // Save publicKeyBytes and credentialId
            user.credentials.push({ credentialIdString: this.arrayBufferToBase64(credentialId), publicKeyString: this.arrayBufferToBase64(publicKeyBytes)});
            this.updateUser(user);
        }
        return valid;
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

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = new Uint8Array(buffer);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }
    base64ToArrayBuffer(base64) {
        let binary_string = window.atob(base64);
        let len = binary_string.length;
        let bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    }

    bufferEncode(value) {
        return btoa(String.fromCharCode.apply(null, new Uint8Array(value)))
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "");
    }

    bufferDecode(value) {
        return Uint8Array.from(atob(value), c => c.charCodeAt(0));
    }

    uint8ArrayFromBase64Url(base64Url)
    {
        return Uint8Array.from(window.atob(base64Url.replace(/-/g, "+").replace(/_/g, "/")), (v) => v.charCodeAt(0));
    }
    
     uint8ArrayFromBase64(base64)
    {
        return Uint8Array.from(window.atob(base64), (v) => v.charCodeAt(0));
    }
}
