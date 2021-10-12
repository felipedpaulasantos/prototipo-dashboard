import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperMessageComponent } from './stepper-message.component';

describe('StepperMessageComponent', () => {
  let component: StepperMessageComponent;
  let fixture: ComponentFixture<StepperMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
