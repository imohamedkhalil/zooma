import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaladdthreatenComponent } from './animaladdthreaten.component';

describe('AnimaladdthreatenComponent', () => {
  let component: AnimaladdthreatenComponent;
  let fixture: ComponentFixture<AnimaladdthreatenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaladdthreatenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaladdthreatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
