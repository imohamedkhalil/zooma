import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooitemComponent } from './zooitem.component';

describe('ZooitemComponent', () => {
  let component: ZooitemComponent;
  let fixture: ComponentFixture<ZooitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZooitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZooitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
