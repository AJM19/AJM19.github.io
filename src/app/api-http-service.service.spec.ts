import { TestBed } from '@angular/core/testing';

import { ApiHttpService } from './api-http-service.service';

describe('ApiHttpServiceService', () => {
  let service: ApiHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
