import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooheaderComponent } from './zooheader.component';

describe('ZooheaderComponent', () => {
  let component: ZooheaderComponent;
  let fixture: ComponentFixture<ZooheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZooheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZooheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
