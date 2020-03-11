import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-search',
  templateUrl: './box-search.component.html',
  styleUrls: ['./box-search.component.scss']
})
export class BoxSearchComponent implements OnInit{

  constructor() { }

  @Input('items') items;
  @Input('resStatus') resStatus;

  tempForResStatus: string = '';

  ngOnInit(): void {
    //this.tempForResStatus = this.resStatus;
   console.log('Список видео', this.items.length);
    //console.log('Тестовая фигня', this.resStatus);
  }
 
  ngOnChanges () {
    this.tempForResStatus = this.resStatus;
    console.log('Тестовая фигня', this.resStatus);
  }

}
