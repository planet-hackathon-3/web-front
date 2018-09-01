import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PicComponent } from './pic/pic.component';
import { TipbarComponent } from './tipbar/tipbar.component';


@NgModule({
  declarations: [
    AppComponent,
    PicComponent,
    TipbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
