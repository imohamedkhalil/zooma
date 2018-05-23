import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZooFormComponent } from './add-zoo-form.component';

describe('AddZooFormComponent', () => {
  let component: AddZooFormComponent;
  let fixture: ComponentFixture<AddZooFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddZooFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZooFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
