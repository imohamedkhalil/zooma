import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowaddComponent } from './showadd.component';

describe('ShowaddComponent', () => {
  let component: ShowaddComponent;
  let fixture: ComponentFixture<ShowaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
