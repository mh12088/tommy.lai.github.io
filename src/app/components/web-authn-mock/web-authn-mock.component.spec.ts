import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAuthnMockComponent } from './web-authn-mock.component';

describe('WebAuthnMockComponent', () => {
  let component: WebAuthnMockComponent;
  let fixture: ComponentFixture<WebAuthnMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebAuthnMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAuthnMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
