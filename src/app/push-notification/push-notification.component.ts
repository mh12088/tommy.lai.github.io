import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FireBaseService } from './service/firebase.service';

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.scss']
})
export class PushNotificationComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  requestPermission() {
  }

}
