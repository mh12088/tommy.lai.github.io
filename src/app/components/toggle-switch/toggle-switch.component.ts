import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {
  isMock: boolean;
  @Output() isMockEvent = new EventEmitter<boolean>();
  constructor(private mockService: MockService) { }

  ngOnInit(): void {
    this.isMock = localStorage.getItem('isMock') === 'true' ? true : false;
  }


  onChange() {
    this.isMock = !this.isMock;
    localStorage.setItem('isMock', `${this.isMock}`);
    localStorage.removeItem('deviceId');
    localStorage.removeItem('user_list');
    this.isMockEvent.emit(this.isMock);
    this.mockService.resetUser();
  }

}
