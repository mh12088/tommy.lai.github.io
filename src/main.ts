import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(() => {
      if ('serviceWorker' in navigator) {
        console.log('Service Worker is supported');
        navigator.serviceWorker.register('ngsw-worker-modified.js')
          .then(function (swReg) {
            console.log('Service Worker is registered', swReg);
          })
          .catch(function (error) {
            console.error('Service Worker Error', error);
          });
      }
      if ('PushManager' in window) {
        Notification.requestPermission(function (status) {
          console.log('Notification permission status:', status);
        });
        console.log('Push messaging is supported');
      } else {
        console.error('Push messaging is not supported');
      }
    })
    .catch(err => console.log(err));
});