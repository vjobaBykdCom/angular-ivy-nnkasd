import { TestBed } from '@angular/core/testing';

import { OpmetLoaderService } from './opmet-loader.service';

describe('OpmetLoaderService', () => {
  let service: OpmetLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpmetLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
