import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustPromotionsComponent } from './cust-promotions.component';

describe('CustPromotionsComponent', () => {
  let component: CustPromotionsComponent;
  let fixture: ComponentFixture<CustPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustPromotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
