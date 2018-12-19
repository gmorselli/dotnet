import { NO_ERRORS_SCHEMA } from "@angular/core";
import { HomeDriverComponent } from "./home-driver.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("HomeDriverComponent", () => {

  let fixture: ComponentFixture<HomeDriverComponent>;
  let component: HomeDriverComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [HomeDriverComponent]
    });

    fixture = TestBed.createComponent(HomeDriverComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
