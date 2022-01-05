// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyAsXuRCH_wOBveI6B__7s8RxKwepkOHSYs",
    authDomain: "webauthn-demo-b0943.firebaseapp.com",
    projectId: "webauthn-demo-b0943",
    storageBucket: "webauthn-demo-b0943.appspot.com",
    messagingSenderId: "459550575359",
    appId: "1:459550575359:web:0da6a3c92e12751c9e9aca",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

