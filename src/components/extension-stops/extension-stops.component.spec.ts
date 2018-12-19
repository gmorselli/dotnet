import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ExtensionStopsComponent } from "./extension-stops.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ExtensionStopsComponent", () => {

  let fixture: ComponentFixture<ExtensionStopsComponent>;
  let component: ExtensionStopsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ExtensionStopsComponent]
    });

    fixture = TestBed.createComponent(ExtensionStopsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
