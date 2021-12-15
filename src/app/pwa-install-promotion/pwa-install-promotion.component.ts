import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from './service/google-analytics-service';

@Component({
  selector: 'app-pwa-install-promotion',
  templateUrl: './pwa-install-promotion.component.html',
  styleUrls: ['./pwa-install-promotion.component.scss']
})
export class PwaInstallPromotionComponent implements OnInit {
  deferredPrompt: any;
  showPromotion: boolean = false;
  showIOSPromotion: boolean = true;
  device: string = "";
  installStatus: string = "";

  products = [];
  constructor(private http: HttpClient, private _$gaService: GoogleAnalyticsService) { }

  getTestingData() {
    const url = `https://mh12088.github.io/tommy.lai.github.io/assets/data.json`;
    return this.http.get<any>(url);
  };

  event() {
    // event name, event category, event label, event value.
    this._$gaService.logEvent('pwa_call_api', 'ddd', 'eee','fff');
  }


  ngOnInit(): void {
    this.detectDevice();
    const displayMode = this.getPWADisplayMode();
    console.log(displayMode);
    if (displayMode === "standalone") {
      this.installStatus = "Installed";
    } else {
      this.installStatus = "Not installed";
    }
    this.getTestingData().subscribe((data: any) => {
      this.products = data;
      console.log(data);
    });
  }

  detectDevice() {
    // Detects device type.
    let device: string = "";
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.match(/iphone|ipad|ipod/i)) {
      device = "ios";
    } else if (userAgent.match(/Android/i)) {
      device = "android";
    } else {
      device = "other";
    }
    this.device = device;
  }

  getPWADisplayMode() {
    // use this to check if the user is already using your PWA - no need to prompt if in standalone
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (document.referrer.startsWith('android-app://')) {
      return 'twa';
    } else if ((window?.navigator as any)?.standalone || isStandalone) {
      return 'standalone';
    }
    return 'browser';
  }

  hideIOSInstallPromotion() {
    this.showIOSPromotion = false;
  }

  // There function and  "Beforeinstallprompt" event is only support android
  showInstallPromotion() {
    this.showPromotion = true;
  }

  hideInstallPromotion() {
    this.showPromotion = false;
  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    this.showInstallPromotion();
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
  }

  addToHomeScreen() {
    // Hide the app provided install promotion
    this.hideInstallPromotion();
    // Show the install prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
          this.hideInstallPromotion();
        }
        this.deferredPrompt = null;
      });
  }
}
