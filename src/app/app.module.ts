import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { raidersComponents } from './raiders/raiders.components';

@NgModule({
  declarations: [
    AppComponent,
    raidersComponents
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
