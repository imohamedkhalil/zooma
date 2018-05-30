import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallAnimalPredthreComponent } from './small-animal-predthre.component';

describe('SmallAnimalPredthreComponent', () => {
  let component: SmallAnimalPredthreComponent;
  let fixture: ComponentFixture<SmallAnimalPredthreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallAnimalPredthreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallAnimalPredthreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
