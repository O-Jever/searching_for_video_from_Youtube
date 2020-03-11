import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { YoutubeService } from './youtube.service';
import { InputSearchComponent } from './input-search/input-search.component';
import { HttpClientModule } from '@angular/common/http';
import { BoxSearchComponent } from './box-search/box-search.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSearchComponent,
    BoxSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
