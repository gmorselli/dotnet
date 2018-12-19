import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CarComponent } from "./car.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CarComponent", () => {

  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CarComponent]
    });

    fixture = TestBed.createComponent(CarComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
