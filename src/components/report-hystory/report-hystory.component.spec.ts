import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportHystoryComponent } from './report-hystory.component';

describe('ReportHystoryComponent', () => {
  let component: ReportHystoryComponent;
  let fixture: ComponentFixture<ReportHystoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportHystoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportHystoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
