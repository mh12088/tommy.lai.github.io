import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ClientDataObj, DecodedAttestionObj } from '../model/web-authn.model';
import { MockService } from './mock-service';
import * as CBOR from '../utils/cbor';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { of } from 'rxjs';
@Injectable()
export class TestService {
    private url = '';
    private baseUrl = 'http://localhost:8080';
    constructor(public http: HttpClient, private mockService: MockService) {
    }

    registerPayload: any = {
        "rawId": "xDMtpbMBPngyDCPiT-qoUl8BUiQ",
        "response": {
            "attestationObject": "o2NmbXRlYXBwbGVnYXR0U3RtdKFjeDVjglkCRjCCAkIwggHJoAMCAQICBgF-Qa8okzAKBggqhkjOPQQDAjBIMRwwGgYDVQQDDBNBcHBsZSBXZWJBdXRobiBDQSAxMRMwEQYDVQQKDApBcHBsZSBJbmMuMRMwEQYDVQQIDApDYWxpZm9ybmlhMB4XDTIyMDEwOTAxNTE0NVoXDTIyMDExMjAxNTE0NVowgZExSTBHBgNVBAMMQGZiNGU1ZmI2YTFmYThjYmU1MThkNGY3MzlkNjIyOGZmYTQ0OTE0ZTQ2NzdiNDI3ODc3MjFjM2U0MjlkNzYxZjUxGjAYBgNVBAsMEUFBQSBDZXJ0aWZpY2F0aW9uMRMwEQYDVQQKDApBcHBsZSBJbmMuMRMwEQYDVQQIDApDYWxpZm9ybmlhMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEsvIXWBHLBLPw3rh7xZ9ooLVuyjocq7w1lMU4bFFcUyHvIAgafvV1vNdX9NDBcslxT2gFr-QdKA5CEPD2oHKIA6NVMFMwDAYDVR0TAQH_BAIwADAOBgNVHQ8BAf8EBAMCBPAwMwYJKoZIhvdjZAgCBCYwJKEiBCD0xSGpdDiTGDVySB8oM8gMRUjv2qAx1YCHw8jsYFN4-zAKBggqhkjOPQQDAgNnADBkAjBGizCO2C_3Wno7NeQ0iezkY58b4kedg_S9J4t-napU3V0AfoPvjyQDGyTf6rarLOECMBf1nYZEl6eDHEHEg7G1EMJTaAFCfQd6MoohVxxokMj88eiUrsKW971LaY7CtKOF9VkCODCCAjQwggG6oAMCAQICEFYlU5XHp_tA6-Io2CYIU7YwCgYIKoZIzj0EAwMwSzEfMB0GA1UEAwwWQXBwbGUgV2ViQXV0aG4gUm9vdCBDQTETMBEGA1UECgwKQXBwbGUgSW5jLjETMBEGA1UECAwKQ2FsaWZvcm5pYTAeFw0yMDAzMTgxODM4MDFaFw0zMDAzMTMwMDAwMDBaMEgxHDAaBgNVBAMME0FwcGxlIFdlYkF1dGhuIENBIDExEzARBgNVBAoMCkFwcGxlIEluYy4xEzARBgNVBAgMCkNhbGlmb3JuaWEwdjAQBgcqhkjOPQIBBgUrgQQAIgNiAASDLocvJhSRgQIlufX81rtjeLX1Xz_LBFvHNZk0df1UkETfm_4ZIRdlxpod2gULONRQg0AaQ0-yTREtVsPhz7_LmJH-wGlggb75bLx3yI3dr0alruHdUVta-quTvpwLJpGjZjBkMBIGA1UdEwEB_wQIMAYBAf8CAQAwHwYDVR0jBBgwFoAUJtdk2cV4wlpn0afeaxLQG2PxxtcwHQYDVR0OBBYEFOuugsT_oaxbUdTPJGEFAL5jvXeIMA4GA1UdDwEB_wQEAwIBBjAKBggqhkjOPQQDAwNoADBlAjEA3YsaNIGl-tnbtOdle4QeFEwnt1uHakGGwrFHV1Azcifv5VRFfvZIlQxjLlxIPnDBAjAsimBE3CAfz-Wbw00pMMFIeFHZYO1qdfHrSsq-OM0luJfQyAW-8Mf3iwelccboDgdoYXV0aERhdGFYmGQv8P1c0tEeoxmgZtShAxpeZTBBH1GgI0qVyzfSZnllRQAAAADySo5w0NP4LCk3MlI8xN5aABTEMy2lswE-eDIMI-JP6qhSXwFSJKUBAgMmIAEhWCCy8hdYEcsEs_DeuHvFn2igtW7KOhyrvDWUxThsUVxTISJYIO8gCBp-9XW811f00MFyyXFPaAWv5B0oDkIQ8PagcogD",
            "clientDataJSON": "eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoiWTJObVpHRTROVGN0T0RZM09DMDBZV1JsTFdFeVlUY3RZMlEzTTJReFltUmlNVFk0Iiwib3JpZ2luIjoiaHR0cHM6Ly9taDEyMDg4LmdpdGh1Yi5pbyJ9"
        },
        "getClientExtensionResults": {},
        "id": "xDMtpbMBPngyDCPiT-qoUl8BUiQ",
        "type": "public-key"
    }

    loginPayload: any = {
        "rawId": "xDMtpbMBPngyDCPiT-qoUl8BUiQ",
        "response": {
            "authenticatorData": "ZC_w_VzS0R6jGaBm1KEDGl5lMEEfUaAjSpXLN9JmeWUFAAAAAA",
            "signature": "MEUCIQDZ9_4HoURKbFosiR4AbptFt9LHTMB8hKLt2M-ecLodggIgD5w4yPk17jIlIEIBD5OMCICnVdT9reTaq73jfMyyaZ4",
            "userHandle": "MTExMTExMTE",
            "clientDataJSON": "eyJ0eXBlIjoid2ViYXV0aG4uZ2V0IiwiY2hhbGxlbmdlIjoiTm1RMU4yRmpZVFl0T1dKbE55MDBaRGt4TFdJd01ESXRNRFExTW1JellXTXpNbUkxIiwib3JpZ2luIjoiaHR0cHM6Ly9taDEyMDg4LmdpdGh1Yi5pbyJ9"
        },
        "getClientExtensionResults": {},
        "id": "xDMtpbMBPngyDCPiT-qoUl8BUiQ",
        "type": "public-key"
    }

    webAuthnRegister(): Observable<any> {
        this.url = `${this.baseUrl}/web-authn-registration`;

        // const utf8Decoder = new TextDecoder('utf-8');
        // const clientData = this.mockService.base64urlDecode(this.registerPayload.response.clientDataJSON);
        // const decodedClientData = utf8Decoder.decode(clientData);
        // const clientDataObj: ClientDataObj = JSON.parse(decodedClientData);
        // console.log(clientDataObj);

        // const attestationObject = this.mockService.base64urlDecode(this.registerPayload.response.attestationObject);
        // console.log(attestationObject);
        // const decodedAttestationObj: DecodedAttestionObj = CBOR.decode(attestationObject);
        // console.log(decodedAttestationObj);

        // const credentialId = this.mockService.base64urlDecode("d1U_F_EYDdh37vHhe3bb1Y2uWFw");
        // console.log(credentialId);

        return this.http.post<any>(this.url, this.registerPayload);
    }

    webAuthnLogin(authenticator): Observable<any> {
        this.url = `${this.baseUrl}/web-authn-authentication`;
        console.log(this.loginPayload);
        this.loginPayload.authenticator = authenticator;
        return this.http.post<any>(this.url, this.loginPayload);
    }


    getChallenge(): Observable<any> {
        this.url = `${this.baseUrl}/get-challenge`;
        return this.http.get<any>(this.url);
    }
}