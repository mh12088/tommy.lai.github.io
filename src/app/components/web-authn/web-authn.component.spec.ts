import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAuthnComponent } from './web-authn.component';

describe('WebAuthnComponent', () => {
  let component: WebAuthnComponent;
  let fixture: ComponentFixture<WebAuthnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebAuthnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAuthnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
