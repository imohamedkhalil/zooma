import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageviewComponent } from './homepageview.component';

describe('HomepageviewComponent', () => {
  let component: HomepageviewComponent;
  let fixture: ComponentFixture<HomepageviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
