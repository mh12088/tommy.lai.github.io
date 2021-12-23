import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DecodedAttestionObj } from '../model/web-authn.model';
import { MockService } from './mock-service';
import * as CBOR from '../utils/cbor';
@Injectable()
export class TestService {
    private url = '';
    private baseUrl = 'http://localhost:8080';
    constructor(public http: HttpClient, private mockService: MockService) {
    }

    mockData: any = {
        "rawId": "9VV9hvzNLUwsivnss8jRvuAfbZ0",
        "response": {
            "attestationObject": "o2NmbXRlYXBwbGVnYXR0U3RtdKFjeDVjglkCRzCCAkMwggHJoAMCAQICBgF92_bwITAKBggqhkjOPQQDAjBIMRwwGgYDVQQDDBNBcHBsZSBXZWJBdXRobiBDQSAxMRMwEQYDVQQKDApBcHBsZSBJbmMuMRMwEQYDVQQIDApDYWxpZm9ybmlhMB4XDTIxMTIyMDA3NDg1M1oXDTIxMTIyMzA3NDg1M1owgZExSTBHBgNVBAMMQDM5MGM1OThmNjFhZGEyNjFhMGMzMjkxNjA3MjNiMjZmNjBjMDZhMjM3ODcxNTkzMjgyN2RlYzUwNDhkNWZlNjgxGjAYBgNVBAsMEUFBQSBDZXJ0aWZpY2F0aW9uMRMwEQYDVQQKDApBcHBsZSBJbmMuMRMwEQYDVQQIDApDYWxpZm9ybmlhMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEKQD79-GZrmE9sJoNXicgksjkecZ6C4S8pLZ_8K4tnyB4_o7RK_AnYzETy94VCDuqWGAfc-Z1eQR73D45kEMP4aNVMFMwDAYDVR0TAQH_BAIwADAOBgNVHQ8BAf8EBAMCBPAwMwYJKoZIhvdjZAgCBCYwJKEiBCAASnNXJq3GOtvKP5w0j3ZKS9kUD5c4pp0azxMi3KoAMjAKBggqhkjOPQQDAgNoADBlAjEAsIW5msSUwwq1ZQD2IuddhUOH7kNHiOZ_xliwz8xUB5sfsLPPzkWroJ0L59A8yVoJAjB2Ay1Pq3OQgJv6-UY5-DmzkW1l7zsfMkGtVQ9Jiw72jjYA2Ci2Vo7vOHW-R-c78iVZAjgwggI0MIIBuqADAgECAhBWJVOVx6f7QOviKNgmCFO2MAoGCCqGSM49BAMDMEsxHzAdBgNVBAMMFkFwcGxlIFdlYkF1dGhuIFJvb3QgQ0ExEzARBgNVBAoMCkFwcGxlIEluYy4xEzARBgNVBAgMCkNhbGlmb3JuaWEwHhcNMjAwMzE4MTgzODAxWhcNMzAwMzEzMDAwMDAwWjBIMRwwGgYDVQQDDBNBcHBsZSBXZWJBdXRobiBDQSAxMRMwEQYDVQQKDApBcHBsZSBJbmMuMRMwEQYDVQQIDApDYWxpZm9ybmlhMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEgy6HLyYUkYECJbn1_Na7Y3i19V8_ywRbxzWZNHX9VJBE35v-GSEXZcaaHdoFCzjUUINAGkNPsk0RLVbD4c-_y5iR_sBpYIG--Wy8d8iN3a9Gpa7h3VFbWvqrk76cCyaRo2YwZDASBgNVHRMBAf8ECDAGAQH_AgEAMB8GA1UdIwQYMBaAFCbXZNnFeMJaZ9Gn3msS0Btj8cbXMB0GA1UdDgQWBBTrroLE_6GsW1HUzyRhBQC-Y713iDAOBgNVHQ8BAf8EBAMCAQYwCgYIKoZIzj0EAwMDaAAwZQIxAN2LGjSBpfrZ27TnZXuEHhRMJ7dbh2pBhsKxR1dQM3In7-VURX72SJUMYy5cSD5wwQIwLIpgRNwgH8_lm8NNKTDBSHhR2WDtanXx60rKvjjNJbiX0MgFvvDH94sHpXHG6A4HaGF1dGhEYXRhWJhkL_D9XNLRHqMZoGbUoQMaXmUwQR9RoCNKlcs30mZ5ZUUAAAAA8kqOcNDT-CwpNzJSPMTeWgAU9VV9hvzNLUwsivnss8jRvuAfbZ2lAQIDJiABIVggKQD79-GZrmE9sJoNXicgksjkecZ6C4S8pLZ_8K4tnyAiWCB4_o7RK_AnYzETy94VCDuqWGAfc-Z1eQR73D45kEMP4Q",
            "clientDataJSON": "eyJ0eXBlIjoid2ViYXV0aG4uY3JlYXRlIiwiY2hhbGxlbmdlIjoiWXpNNFlUTXpaalV0TXpka1ppMDBOell4TFdFMlltWXROR0l3WmpJd01ERTBNbU5oIiwib3JpZ2luIjoiaHR0cHM6Ly9taDEyMDg4LmdpdGh1Yi5pbyJ9"
        },
        "getClientExtensionResults": {},
        "id": "9VV9hvzNLUwsivnss8jRvuAfbZ0",
        "type": "public-key"
    };

    savePublicKey(): Observable<any> {
        // const decodedClientDataJSON = this.mockService.base64urlDecode(this.mockData.response.clientDataJSON);
        // const a = this.mockService.arrayBufferToStr(decodedClientDataJSON);
        // console.log(a);
        // const decodedAttestationJSON = this.mockService.base64urlDecode(this.mockData.response.attestationObject);
        // const decodedAttestationObj: DecodedAttestionObj = CBOR.decode(decodedAttestationJSON);
        // console.log(decodedAttestationObj);
        this.url = `${this.baseUrl}/save-public-key`;
        return this.http.post<any>(this.url, this.mockData);
    }
}
