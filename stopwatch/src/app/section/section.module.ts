import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { StwatchModule } from './stwatch/stwatch.module';
import { RouterModule, Routes } from '@angular/router';
import { StwatchComponent } from './stwatch/stwatch.component';
import { ClockComponent } from './clock/clock.component';

const routes : Routes = [
  {
    path : 'stwatch',
    component : StwatchComponent
  },
  {
    path: 'clock',
    component : ClockComponent
  }
]

@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent
  ],
  imports: [
    CommonModule,
    StwatchModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SectionComponent,
    RouterModule
  ]
})
export class SectionModule { }
