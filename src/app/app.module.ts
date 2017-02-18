import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { footerComponent } from './footer/app.footerComponent';


@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    footerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
