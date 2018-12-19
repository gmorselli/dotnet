import { CarService } from "./car.service";
import { TestBed } from "@angular/core/testing";

describe("CarService", () => {

  let service: CarService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CarService
      ]
    });
    service = TestBed.get(CarService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
