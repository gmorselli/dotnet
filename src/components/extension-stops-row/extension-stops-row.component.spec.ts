import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensionStopsRowComponent } from './extension-stops-row.component';

describe('ExtensionStopsRowComponent', () => {
  let component: ExtensionStopsRowComponent;
  let fixture: ComponentFixture<ExtensionStopsRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensionStopsRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensionStopsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
