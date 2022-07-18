import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PwaInstallPromotionComponent } from './pwa-install-promotion/pwa-install-promotion.component';
import { HttpClientModule} from '@angular/common/http';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { WebAuthnMockComponent } from './components/web-authn-mock/web-authn-mock.component';
import { WebAuthnComponent } from './components/web-authn/web-authn.component';
import { TestService } from './components/web-authn/service/test-service';
import { MockV2Service } from './components/web-authn/service/mockV2-service';

@NgModule({
  declarations: [
    AppComponent,
    WebAuthnComponent,
    PwaInstallPromotionComponent,
    PushNotificationComponent,
    WebAuthnMockComponent
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
