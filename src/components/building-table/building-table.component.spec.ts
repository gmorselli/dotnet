import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingTableComponent } from './building-table.component';

describe('BuildingTableComponent', () => {
  let component: BuildingTableComponent;
  let fixture: ComponentFixture<BuildingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
