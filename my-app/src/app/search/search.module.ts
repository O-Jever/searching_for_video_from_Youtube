import { NgModule } from '@angular/core';
import { InputSearchComponent } from './input-search/input-search.component';
import { BoxSearchComponent } from './box-search/box-search.component';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { YoutubeService } from '../youtube.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    SearchRoutingModule,
    HttpClientModule,
    //CommonModule,
  ],
  declarations: [
    SearchComponent,
    InputSearchComponent,
    BoxSearchComponent,
  ],
  providers: [
    YoutubeService
  ],
  bootstrap: [SearchComponent]
})
export class SearchModule {}
