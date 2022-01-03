import { Injectable } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

declare var gtag: any;
@Injectable({
    providedIn: 'root'
})
export class GoogleAnalyticsService {

    constructor(private _router: Router) {
        this._router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe((e: NavigationEnd) => {
            gtag('js', new Date());
            gtag('config', 'G-TFJ9H2W5Q3');
            // gtag('get', 'G-TFJ9H2W5Q3', 'client_id', (clientID) => {
            //     console.log("test: ", clientID);
            // });
        });
    }

    init() {
        // Global site tag (gtag.js) - Google Analytics
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-TFJ9H2W5Q3';
        script.async = true;
        document.getElementsByTagName('head')[0].appendChild(script);
        const gtagEl = document.createElement('script');
        const gtagBody = document.createTextNode(`
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        `);
        gtagEl.appendChild(gtagBody);
        document.body.appendChild(gtagEl);
    }

    logEvent(event, category, label, value) {
        gtag('event', event, {
            event_category: category,
            event_label: label,
            value: value
        });
        console.log('gtag event captured...');
    }
}