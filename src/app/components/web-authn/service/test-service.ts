import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ClientDataObj, DecodedAttestionObj } from 'src/app/models/web-authn.model';
import { MockService } from './mock-service';
import * as CBOR from 'src/app/utils/cbor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { of } from 'rxjs';
import { loginPayload, registerPayload } from '../utils/app-util';
@Injectable()
export class TestService {
    private url = '';
    private baseUrl = 'http://localhost:8080';
    constructor(public http: HttpClient, private mockService: MockService) {
    }
    

    webAuthnRegister(): Observable<any> {
        this.url = `${this.baseUrl}/web-authn-registration`;

        const utf8Decoder = new TextDecoder('utf-8');
        const clientData = this.mockService.base64urlDecode(registerPayload.response.clientDataJSON);
        const decodedClientData = utf8Decoder.decode(clientData);
        const clientDataObj: ClientDataObj = JSON.parse(decodedClientData);
        console.log(clientDataObj);

        const attestationObject = this.mockService.base64urlDecode(registerPayload.response.attestationObject);
        console.log(attestationObject);
        const decodedAttestationObj: DecodedAttestionObj = CBOR.decode(attestationObject);
        console.log(decodedAttestationObj);

        const credentialId = this.mockService.base64urlDecode("d1U_F_EYDdh37vHhe3bb1Y2uWFw");
        console.log(credentialId);

        return this.http.post<any>(this.url, registerPayload);
    }

    webAuthnLogin(authenticator): Observable<any> {
        this.url = `${this.baseUrl}/web-authn-authentication`;
        console.log(loginPayload);
        loginPayload.authenticator = authenticator;
        return this.http.post<any>(this.url, loginPayload);
    }


    getChallenge(): Observable<any> {
        this.url = `${this.baseUrl}/get-challenge`;
        return this.http.get<any>(this.url);
    }
}