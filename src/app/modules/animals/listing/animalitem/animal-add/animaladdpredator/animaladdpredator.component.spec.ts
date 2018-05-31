import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaladdpredatorComponent } from './animaladdpredator.component';

describe('AnimaladdpredatorComponent', () => {
  let component: AnimaladdpredatorComponent;
  let fixture: ComponentFixture<AnimaladdpredatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaladdpredatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaladdpredatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
