import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooCollectionComponent } from './zoo-collection.component';

describe('ZooCollectionComponent', () => {
  let component: ZooCollectionComponent;
  let fixture: ComponentFixture<ZooCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZooCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZooCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
