import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedAnimalComponent } from './related-animal.component';

describe('RelatedAnimalComponent', () => {
  let component: RelatedAnimalComponent;
  let fixture: ComponentFixture<RelatedAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatedAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
