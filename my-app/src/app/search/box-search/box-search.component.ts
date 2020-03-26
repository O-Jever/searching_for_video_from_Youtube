import { Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-box-search',
  templateUrl: './box-search.component.html',
  styleUrls: ['./box-search.component.scss']
})

export class BoxSearchComponent implements OnInit, OnChanges{

  constructor() { }

  @Input('items') items;
  @Input('resStatus') resStatus;
  @ViewChild('cards') cards;
  @ViewChild('myTitle') myTitle;

  public tempForResStatus: string = '';
  public tempForItems: any = [];

  public ngOnInit () : void {
  }
 
  public ngOnChanges () : void {
    //this.tempForItems.length = 0;
    this.tempForItems.splice(0, this.tempForItems.length); //заебись фикс (нет)
    this.tempForItems = this.items;
    this.tempForResStatus = this.resStatus;
  }

}
