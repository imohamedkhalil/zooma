import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditZooComponent } from './edit-zoo.component';

describe('EditZooComponent', () => {
  let component: EditZooComponent;
  let fixture: ComponentFixture<EditZooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditZooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditZooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
