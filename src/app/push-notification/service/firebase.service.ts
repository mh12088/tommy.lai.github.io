import { Injectable } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import { getToken } from "firebase/messaging";
declare var gtag: any;
@Injectable({
    providedIn: 'root'
})
export class FireBaseService {

    constructor(private swPush: SwPush, private swUpdate: SwUpdate) {
        swUpdate.available.subscribe(() => {
            window.location.reload();
        });
    }

    init() {
        const firebaseConfig = {
            apiKey: "AIzaSyAsXuRCH_wOBveI6B__7s8RxKwepkOHSYs",
            authDomain: "webauthn-demo-b0943.firebaseapp.com",
            projectId: "webauthn-demo-b0943",
            storageBucket: "webauthn-demo-b0943.appspot.com",
            messagingSenderId: "459550575359",
            appId: "1:459550575359:web:0da6a3c92e12751c9e9aca",
            measurementId: "G-5SX5JWR775"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const messaging = getMessaging(app);
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

        this.swPush.messages.subscribe(message => {
            console.log(message);
        })
    }
}