import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from './pwa-install-promotion/service/google-analytics-service';
import * as uuid from 'uuid';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { FireBaseService } from './push-notification/service/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'biometric-login-demo';

  constructor(private _$gaService: GoogleAnalyticsService, private _$firebaseService: FireBaseService) { }

  ngOnInit() {
    this._$gaService.init();
    const deviceId = uuid.v4();
    if (!localStorage.getItem("device_id")) {
      localStorage.setItem("device_id", deviceId);
    };

    this._$firebaseService.init();
  }
}
