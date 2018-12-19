import { GoogleMapService } from "./google-map.service";
import { TestBed } from "@angular/core/testing";

describe("GoogleMapService", () => {

  let service: GoogleMapService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GoogleMapService
      ]
    });
    service = TestBed.get(GoogleMapService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
