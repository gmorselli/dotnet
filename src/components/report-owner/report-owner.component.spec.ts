import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOwnerComponent } from './report-owner.component';

describe('ReportOwnerComponent', () => {
  let component: ReportOwnerComponent;
  let fixture: ComponentFixture<ReportOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
