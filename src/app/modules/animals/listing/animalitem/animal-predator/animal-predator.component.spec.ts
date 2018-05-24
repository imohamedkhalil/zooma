import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPredatorComponent } from './animal-predator.component';

describe('AnimalPredatorComponent', () => {
  let component: AnimalPredatorComponent;
  let fixture: ComponentFixture<AnimalPredatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalPredatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalPredatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
