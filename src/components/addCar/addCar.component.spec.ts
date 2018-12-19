import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AddCarComponent } from "./addCar.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AddCarComponent", () => {

  let fixture: ComponentFixture<AddCarComponent>;
  let component: AddCarComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AddCarComponent]
    });

    fixture = TestBed.createComponent(AddCarComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
