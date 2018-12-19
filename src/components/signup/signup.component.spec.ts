import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SignupComponent } from "./signup.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SignupComponent", () => {

  let fixture: ComponentFixture<SignupComponent>;
  let component: SignupComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SignupComponent]
    });

    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
