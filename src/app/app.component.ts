import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from './pwa-install-promotion/service/google-analytics-service';
import * as uuid from 'uuid';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'biometric-login-demo';

  constructor(private _$gaService: GoogleAnalyticsService) { }

  ngOnInit() {
    this._$gaService.init();
    const deviceId = uuid.v4();
    if (!localStorage.getItem("device_id")) {
      localStorage.setItem("device_id", deviceId);
    };
  }
}
