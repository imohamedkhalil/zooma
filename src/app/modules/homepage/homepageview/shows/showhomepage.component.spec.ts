import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhomepageComponent } from './showhomepage.component';

describe('ShowhomepageComponent', () => {
  let component: ShowhomepageComponent;
  let fixture: ComponentFixture<ShowhomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowhomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
