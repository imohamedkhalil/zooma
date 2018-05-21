import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalitemComponent } from './animalitem.component';

describe('AnimalitemComponent', () => {
  let component: AnimalitemComponent;
  let fixture: ComponentFixture<AnimalitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
