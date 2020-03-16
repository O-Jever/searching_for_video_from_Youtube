import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchComponent } from './input-search/input-search.component';
import { BoxSearchComponent } from './box-search/box-search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { YoutubeService } from '../youtube.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SearchComponent,
    InputSearchComponent,
    BoxSearchComponent,
  ],
  imports: [
    SearchRoutingModule,
    HttpClientModule,
  ],
  providers: [
    YoutubeService
  ],
  bootstrap: [SearchComponent]
})
export class SearchModule { }
