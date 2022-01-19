import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
@Injectable({
    providedIn: 'root'
})
export class FireBaseService {

    constructor() {
    }

    init() {
        const firebaseApp = initializeApp({
            apiKey: "AIzaSyAsXuRCH_wOBveI6B__7s8RxKwepkOHSYs",
            authDomain: "webauthn-demo-b0943.firebaseapp.com",
            projectId: "webauthn-demo-b0943",
            storageBucket: "webauthn-demo-b0943.appspot.com",
            messagingSenderId: "459550575359",
            appId: "1:459550575359:web:0da6a3c92e12751c9e9aca",
            measurementId: "G-5SX5JWR775"
        });

        // Initialize Firebase
        const messaging = getMessaging(firebaseApp);

        getToken(messaging, { vapidKey: 'BDR7cEU2X-gx7thlDr9N28pzrpdauh-V4y508e45jnV8Mpj4ezYQDf-PveDkHLwg5P_n96Yo8W51ZWThDyConBE' }).then((currentToken) => {
            if (currentToken) {
                // Send the token to your server and update the UI if necessary
                // ...
                console.log(currentToken);
            } else {
                // Show permission request UI
                console.log('No registration token available. Request permission to generate one.');
                // ...
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // ...
        });

        onMessage(messaging, (payload) => {
            console.log('Received foreground message: ', payload);
        });
    }
}