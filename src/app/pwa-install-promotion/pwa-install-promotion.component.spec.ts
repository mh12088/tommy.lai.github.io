import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaInstallPromotionComponent } from './pwa-install-promotion.component';

describe('PwaInstallPromotionComponent', () => {
  let component: PwaInstallPromotionComponent;
  let fixture: ComponentFixture<PwaInstallPromotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwaInstallPromotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaInstallPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
