import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaladddiseaseComponent } from './animaladddisease.component';

describe('AnimaladddiseaseComponent', () => {
  let component: AnimaladddiseaseComponent;
  let fixture: ComponentFixture<AnimaladddiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaladddiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaladddiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
