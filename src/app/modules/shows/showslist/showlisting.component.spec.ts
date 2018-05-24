import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlistingComponent } from './showlisting.component';

describe('ShowlistingComponent', () => {
  let component: ShowlistingComponent;
  let fixture: ComponentFixture<ShowlistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowlistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
