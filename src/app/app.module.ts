import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material section
import { BrowserAnimationsModule } from ''

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
