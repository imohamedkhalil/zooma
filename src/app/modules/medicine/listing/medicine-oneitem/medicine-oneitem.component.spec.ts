import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineOneitemComponent } from './medicine-oneitem.component';

describe('MedicineOneitemComponent', () => {
  let component: MedicineOneitemComponent;
  let fixture: ComponentFixture<MedicineOneitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineOneitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineOneitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
