
import { TestBed } from "@angular/core/testing";
import { StopService } from "./stop.service";

describe("Stop.serviceService", () => {

  let service: StopService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StopService
      ]
    });
    service = TestBed.get(StopService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
