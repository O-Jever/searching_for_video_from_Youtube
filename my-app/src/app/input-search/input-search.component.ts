import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { fromEvent } from 'rxjs';
import { distinct, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})

export class InputSearchComponent implements AfterViewInit {

  constructor(private callYoutubeService: YoutubeService) { }

  @Output() appInputSearch = new EventEmitter<Object>();
  @Output() responceStatus = new EventEmitter<String>();

  @ViewChild('searchInput') searchInput;

  ngAfterViewInit() : void {
    this.callRequireForYoutubeService();
  }  
  callRequireForYoutubeService() {
    fromEvent(this.searchInput.nativeElement, 'keyup')
    .pipe(
      map((event: any) => event.target.value),
      debounceTime(900),
      distinct() 
      )
    .subscribe(result => {
      if (result !== '') {
        this.responceStatus.emit("Загрузка");
        console.log('Список букв', result);
        this.callYoutubeService.getInfoAboutVideo(result)
          .pipe()
          .subscribe(result => {
            this.appInputSearch.emit(result);
        });
      } else this.responceStatus.emit("Ничего не найдено");
    });
  }
}
