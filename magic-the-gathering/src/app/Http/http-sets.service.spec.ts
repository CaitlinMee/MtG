import { TestBed } from '@angular/core/testing';

import { HttpSetsService } from './http-sets.service';

describe('HttpMtGService', () => {
  let service: HttpSetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpSetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
