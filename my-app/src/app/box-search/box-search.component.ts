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

  public tempForResStatus: string = '';

  public ngOnInit () : void {
    //this.items.splice(0, this.items.length);
    console.log('Список видео', this.items.length);
  }
 
  public ngOnChanges () : void {
    this.tempForResStatus = this.resStatus;
  }

}
