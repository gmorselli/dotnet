import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingTreeComponent } from './building-tree.component';

describe('BuildingTreeComponent', () => {
  let component: BuildingTreeComponent;
  let fixture: ComponentFixture<BuildingTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
