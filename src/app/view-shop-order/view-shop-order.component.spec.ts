import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShopOrderComponent } from './view-shop-order.component';

describe('ViewShopOrderComponent', () => {
  let component: ViewShopOrderComponent;
  let fixture: ComponentFixture<ViewShopOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewShopOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShopOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
