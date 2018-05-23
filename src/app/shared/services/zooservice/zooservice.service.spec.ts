import { TestBed, inject } from '@angular/core/testing';

import { ZooserviceService } from './zooservice.service';

describe('ZooserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZooserviceService]
    });
  });

  it('should be created', inject([ZooserviceService], (service: ZooserviceService) => {
    expect(service).toBeTruthy();
  }));
});
