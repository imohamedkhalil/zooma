import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoofilterComponent } from './zoofilter.component';

describe('ZoofilterComponent', () => {
  let component: ZoofilterComponent;
  let fixture: ComponentFixture<ZoofilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoofilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoofilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
