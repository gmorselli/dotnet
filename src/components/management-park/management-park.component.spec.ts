import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementParkComponent } from './management-park.component';

describe('ManagementParkComponent', () => {
  let component: ManagementParkComponent;
  let fixture: ComponentFixture<ManagementParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
