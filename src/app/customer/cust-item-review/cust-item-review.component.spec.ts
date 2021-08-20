import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustItemReviewComponent } from './cust-item-review.component';

describe('CustItemReviewComponent', () => {
  let component: CustItemReviewComponent;
  let fixture: ComponentFixture<CustItemReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustItemReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustItemReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
