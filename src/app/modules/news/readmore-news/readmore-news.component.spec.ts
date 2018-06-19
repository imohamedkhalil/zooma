import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmoreNewsComponent } from './readmore-news.component';

describe('ReadmoreNewsComponent', () => {
  let component: ReadmoreNewsComponent;
  let fixture: ComponentFixture<ReadmoreNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmoreNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmoreNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
