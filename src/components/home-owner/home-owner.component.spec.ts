import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOwnerComponent } from './home-owner.component';

describe('HomeOwnerComponent', () => {
  let component: HomeOwnerComponent;
  let fixture: ComponentFixture<HomeOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
