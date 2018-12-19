import { NO_ERRORS_SCHEMA } from "@angular/core";
import { LegislationsComponent } from "./legislations.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("LegislationsComponent", () => {

  let fixture: ComponentFixture<LegislationsComponent>;
  let component: LegislationsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [LegislationsComponent]
    });

    fixture = TestBed.createComponent(LegislationsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
