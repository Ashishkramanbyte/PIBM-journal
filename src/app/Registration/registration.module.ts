import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepFirstComponent } from './step-first/step-first.component';
import { StepSecondComponent } from './step-second/step-second.component';
import { StepThirdComponent } from './step-third/step-third.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    StepFirstComponent,
    StepSecondComponent,
    StepThirdComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    RegistrationComponent,
    StepFirstComponent,
    StepSecondComponent,
    StepThirdComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegistrationModule {
  
}
