/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DiseaseService } from './disease.service';

describe('Service: Disease', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiseaseService]
    });
  });

  it('should ...', inject([DiseaseService], (service: DiseaseService) => {
    expect(service).toBeTruthy();
  }));
});
