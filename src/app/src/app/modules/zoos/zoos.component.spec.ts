import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoosComponent } from './zoos.component';

describe('ZoosComponent', () => {
  let component: ZoosComponent;
  let fixture: ComponentFixture<ZoosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
