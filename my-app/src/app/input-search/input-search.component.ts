import { Component, OnInit, Output, ViewChild, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';

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

  public ngAfterViewInit() : void {
    this.callRequireForYoutubeService();
  }  
  public callRequireForYoutubeService () : void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
    .pipe(
      map((event: any) => event.target.value),
      debounceTime(900),
      distinctUntilChanged()
      )
    .subscribe(result => {
      if (result.length > 0 && result.match(/^\s/) === null) {
        this.responceStatus.emit("Загрузка");
        this.callYoutubeService.getInfoAboutVideo(result)
          .pipe()
          .subscribe(result => { 
            this.appInputSearch.emit(result);
        });
      } else this.responceStatus.emit("Ничего не найдено");
    });
  }
}
