import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { StwatchComponent } from './stwatch.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
    StwatchComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [

    StwatchComponent
  ]
})
export class StwatchModule { }
