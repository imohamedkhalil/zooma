/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MockMapService } from './mock-map.service';

describe('Service: MockMap', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockMapService]
    });
  });

  it('should ...', inject([MockMapService], (service: MockMapService) => {
    expect(service).toBeTruthy();
  }));
});
