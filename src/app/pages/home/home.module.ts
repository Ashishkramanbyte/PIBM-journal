import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RightMenuComponent } from './right-menu/right-menu.component';
import { BannerHomeComponent } from './banner-home/banner-home.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
@NgModule({
  declarations: [
    HomeComponent,
    RightMenuComponent,
    BannerHomeComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,    
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})
export class HomeModule { }
