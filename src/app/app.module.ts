import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebAuthnComponent } from './web-authn/web-authn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PwaInstallPromotionComponent } from './pwa-install-promotion/pwa-install-promotion.component';
import { HttpClientModule} from '@angular/common/http';
import { TestService } from './web-authn/service/test-service';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { MockV2Service } from './web-authn/service/mockV2-service';

@NgModule({
  declarations: [
    AppComponent,
    WebAuthnComponent,
    PwaInstallPromotionComponent,
    PushNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ServiceWorkerModule.register('ngsw-worker-modified.js', { enabled: environment.production }),    
    HttpClientModule
  ],
  providers: [TestService, MockV2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
