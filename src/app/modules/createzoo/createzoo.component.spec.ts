import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatezooComponent } from './createzoo.component';

describe('CreatezooComponent', () => {
  let component: CreatezooComponent;
  let fixture: ComponentFixture<CreatezooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatezooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatezooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
