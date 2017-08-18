import { TestBed, inject } from '@angular/core/testing';

import { StopInfoService } from './stop-info.service';

describe('StopInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StopInfoService]
    });
  });

  it('should be created', inject([StopInfoService], (service: StopInfoService) => {
    expect(service).toBeTruthy();
  }));
});
