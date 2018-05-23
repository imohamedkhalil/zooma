import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoodetailsComponent } from './zoodetails.component';

describe('ZoodetailsComponent', () => {
  let component: ZoodetailsComponent;
  let fixture: ComponentFixture<ZoodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
