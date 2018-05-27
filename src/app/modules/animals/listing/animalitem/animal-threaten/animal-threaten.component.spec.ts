import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalThreatenComponent } from './animal-threaten.component';

describe('AnimalThreatenComponent', () => {
  let component: AnimalThreatenComponent;
  let fixture: ComponentFixture<AnimalThreatenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalThreatenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalThreatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
