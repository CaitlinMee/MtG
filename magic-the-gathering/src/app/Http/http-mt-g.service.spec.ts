import { TestBed } from '@angular/core/testing';

import { HttpMtGService } from './http-mt-g.service';

describe('HttpMtGService', () => {
  let service: HttpMtGService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMtGService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
