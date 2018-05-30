import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditshowComponent } from './editshow.component';

describe('EditshowComponent', () => {
  let component: EditshowComponent;
  let fixture: ComponentFixture<EditshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
