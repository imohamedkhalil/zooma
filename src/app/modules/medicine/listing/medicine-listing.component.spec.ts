import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineListingComponent } from './medicine-listing.component';

describe('MedicineListingComponent', () => {
  let component: MedicineListingComponent;
  let fixture: ComponentFixture<MedicineListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
