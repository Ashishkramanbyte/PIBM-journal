import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepSecondComponent } from './step-second.component';

describe('StepSecondComponent', () => {
  let component: StepSecondComponent;
  let fixture: ComponentFixture<StepSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepSecondComponent]
    });
    fixture = TestBed.createComponent(StepSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
