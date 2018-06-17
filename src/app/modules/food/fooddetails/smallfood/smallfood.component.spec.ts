/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SmallfoodComponent } from './smallfood.component';

describe('SmallfoodComponent', () => {
  let component: SmallfoodComponent;
  let fixture: ComponentFixture<SmallfoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallfoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
