import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalhomepageComponent } from './animalhomepage.component';

describe('AnimalhomepageComponent', () => {
  let component: AnimalhomepageComponent;
  let fixture: ComponentFixture<AnimalhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
