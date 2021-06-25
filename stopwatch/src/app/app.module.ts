import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';
import { StwatchModule } from './section/stwatch/stwatch.module';

@NgModule({
  //component의 경우 하나의 module에 속해있어야 사용이 가능하다.
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SectionModule,
    StwatchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


