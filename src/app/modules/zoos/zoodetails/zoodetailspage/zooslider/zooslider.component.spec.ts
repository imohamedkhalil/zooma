import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoosliderComponent } from './zooslider.component';

describe('ZoosliderComponent', () => {
  let component: ZoosliderComponent;
  let fixture: ComponentFixture<ZoosliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoosliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoosliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
