import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PicComponent } from './pic/pic.component';
import { TipbarComponent } from './tipbar/tipbar.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PicComponent,
    TipbarComponent
  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
