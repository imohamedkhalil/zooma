import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDiseaseComponent } from './animal-disease.component';

describe('AnimalDiseaseComponent', () => {
  let component: AnimalDiseaseComponent;
  let fixture: ComponentFixture<AnimalDiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalDiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
