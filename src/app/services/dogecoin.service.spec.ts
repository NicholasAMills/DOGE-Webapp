import { TestBed } from '@angular/core/testing';

import { DogecoinService } from './dogecoin.service';

describe('DogecoinService', () => {
  let service: DogecoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogecoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
