import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNearComponent } from './report-near.component';

describe('ReportNearComponent', () => {
  let component: ReportNearComponent;
  let fixture: ComponentFixture<ReportNearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportNearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportNearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
