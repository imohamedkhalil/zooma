import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneItemNewsComponent } from './one-item-news.component';

describe('OneItemNewsComponent', () => {
  let component: OneItemNewsComponent;
  let fixture: ComponentFixture<OneItemNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneItemNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneItemNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
