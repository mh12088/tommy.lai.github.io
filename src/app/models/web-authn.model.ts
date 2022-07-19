export interface ClientDataObj {
    challenge: string;
    origin: string;
    type: string;
}

export interface DecodedAttestionObj {
    attStmt: {
        alg: number;
        sig: Uint8Array;
    };
    authData: Uint8Array;
    fmt: string;
}

export interface Credential {
    credentialId?: Uint8Array;
    publicKey?: Uint8Array;
    credentialIdString?: string;
    publicKeyString?: string;
}

export interface User {
    email?: string;
    mobileNumber?: string;
    credentials?: Credential[];
    deviceId?: string;
    authenticatorString?: string;
}

export interface DecodedPublicKeyCredential {
    id: string;
    rawId: string;
    response: AuthenticatorAttestationResponse;
    type: string;
}

export interface AuthenticatorAttestationResponse {
    clientDataJSON?: ClientDataObj;
    attestationObject?: DecodedAttestionObj;
    signature?: string;
    userHandle?: string;
    authenticatorData?: any;
}