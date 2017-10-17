import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { raidersComponents } from './raiders/raiders.components';
import { noticiasComponents } from './noticias/noticias.components';

@NgModule({
  declarations: [
    AppComponent,
    noticiasComponents,
    raidersComponents
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
