import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from './pwa-install-promotion/service/google-analytics-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'biometric-login-demo';

  constructor(private _$gaService: GoogleAnalyticsService) { }

  ngOnInit() {
    // this._$gaService.init();
  }

  ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
  }
}
