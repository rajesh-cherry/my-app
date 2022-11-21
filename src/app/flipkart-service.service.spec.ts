import { TestBed } from '@angular/core/testing';

import { FlipkartServiceService } from './flipkart-service.service';

describe('FlipkartServiceService', () => {
  let service: FlipkartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlipkartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
