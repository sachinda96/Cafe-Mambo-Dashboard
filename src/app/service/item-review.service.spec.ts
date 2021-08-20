import { TestBed } from '@angular/core/testing';

import { ItemReviewService } from './item-review.service';

describe('ItemReviewService', () => {
  let service: ItemReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
