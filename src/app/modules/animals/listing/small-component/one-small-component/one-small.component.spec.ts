import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSmallComponent } from './one-small.component';

describe('OneSmallComponent', () => {
  let component: OneSmallComponent;
  let fixture: ComponentFixture<OneSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
