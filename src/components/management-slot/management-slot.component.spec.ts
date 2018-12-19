import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSlotComponent } from './management-slot.component';

describe('ManagementSlotComponent', () => {
  let component: ManagementSlotComponent;
  let fixture: ComponentFixture<ManagementSlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementSlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
