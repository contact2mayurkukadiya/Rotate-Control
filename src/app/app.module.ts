import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RotateControlModule } from 'rotate-control';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RotateControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
