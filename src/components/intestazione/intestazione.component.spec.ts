import { NO_ERRORS_SCHEMA } from "@angular/core";
import { IntestazioneComponent } from "./intestazione.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("IntestazioneComponent", () => {

  let fixture: ComponentFixture<IntestazioneComponent>;
  let component: IntestazioneComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [IntestazioneComponent]
    });

    fixture = TestBed.createComponent(IntestazioneComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
