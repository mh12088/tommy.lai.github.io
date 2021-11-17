
@Service
public class MockService {

    public registerCredential(User user, PublicKeyCredential: credential) {
    Uint8Array authData = extractAuthData(credential);
        Int credentialIdLength = getCredentialIdLength(authData);
        Uint8Array credentialId = IntStream.range(55, 55 + credentialIdLength).map(i => authData[i]).toArray(); 
        log.debug("credentialIdLength:" + credentialIdLength.toString());
        log.debug("credentialId:" + credentialId.toString());
        Uint8Array publicKeyBytes =  IntStream.range(55, 55 + credentialIdLength).map(i => authData[i]).toArray(); 
        Any publicKeyObject = CBOR.decode(publicKeyBytes.buffer);
        log.debug("publicKeyObject:" + publicKeyObject);

        Bool valid = true;
        if (valid) {
            // Save publicKeyBytes and credentialId
            HashMap<String, Uint8Array> credentials = new HashMap<String, Uint8Array>();
            capitalCities.put("credentialId", credentialId);
            capitalCities.put("publicKey", publicKeyBytes);
            user.credentials.add(credentials);
            this.updateUser(user);
        }
        return valid;
    }
}