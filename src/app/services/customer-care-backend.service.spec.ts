import {TestBed} from '@angular/core/testing';

import {CustomerCareBackendService} from './customer-care-backend.service';

describe('CustomerCareBackendService', () => {
  let service: CustomerCareBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerCareBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
