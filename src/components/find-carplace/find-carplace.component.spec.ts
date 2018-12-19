import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindCarplaceComponent } from './find-carplace.component';

describe('FindCarplaceComponent', () => {
  let component: FindCarplaceComponent;
  let fixture: ComponentFixture<FindCarplaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindCarplaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindCarplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
