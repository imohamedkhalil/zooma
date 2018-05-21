import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewshomepageComponent } from './newshomepage.component';

describe('NewshomepageComponent', () => {
  let component: NewshomepageComponent;
  let fixture: ComponentFixture<NewshomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewshomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewshomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
