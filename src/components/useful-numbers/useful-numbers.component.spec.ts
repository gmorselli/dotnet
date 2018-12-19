import { NO_ERRORS_SCHEMA } from "@angular/core";
import { UsefulNumbersComponent } from "./useful-numbers.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("UsefulNumbersComponent", () => {

  let fixture: ComponentFixture<UsefulNumbersComponent>;
  let component: UsefulNumbersComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [UsefulNumbersComponent]
    });

    fixture = TestBed.createComponent(UsefulNumbersComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
