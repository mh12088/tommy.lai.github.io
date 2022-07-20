import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockService } from 'src/app/services/mock.service';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent implements OnInit {
  @Input()
  flagName: string;
  isChecked: boolean;
  @Output() callback = new EventEmitter<boolean>();
  constructor(private mockService: MockService) { }

  ngOnInit(): void {
    this.isChecked = !!JSON.parse(localStorage.getItem(this.flagName));
  }


  onChange() {
    this.isChecked = !this.isChecked;
    switch (this.flagName) {
      case 'isMock':
        localStorage.setItem(this.flagName, JSON.stringify(this.isChecked));
        localStorage.removeItem('deviceId');
        localStorage.removeItem('user_list');
        this.callback.emit(this.isChecked);
        this.mockService.resetUser();
        break;
      default:
        localStorage.setItem(this.flagName, JSON.stringify(this.isChecked));
        break;
    }
  }

}
