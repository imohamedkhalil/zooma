import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaladdfoodComponent } from './animaladdfood.component';

describe('AnimaladdfoodComponent', () => {
  let component: AnimaladdfoodComponent;
  let fixture: ComponentFixture<AnimaladdfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimaladdfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaladdfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
