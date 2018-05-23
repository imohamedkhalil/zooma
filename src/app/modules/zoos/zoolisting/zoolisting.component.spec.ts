import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoolistingComponent } from './zoolisting.component';

describe('ZoolistingComponent', () => {
  let component: ZoolistingComponent;
  let fixture: ComponentFixture<ZoolistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoolistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoolistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
