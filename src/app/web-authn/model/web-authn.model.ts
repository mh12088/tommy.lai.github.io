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
    credentialId: Uint8Array;
    publicKey: Uint8Array;
}

export interface User {
    email?: string;
    mobileNumber?: string;
    credentials?: Credential[];
}