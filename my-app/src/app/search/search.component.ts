import { Component } from '@angular/core';
import { InfoListAboutVideo } from '../responce-interface';

@Component({
 selector: 'search-root',
 templateUrl: './search.component.html',
 styleUrls: ['./search.component.scss']
})
export class SearchComponent {

 public listOfCards: InfoListAboutVideo[] = [];
 public status: string = "Начните поиск";
 
 constructor () {
 }

 public responceStatus (ev) : void {
   this.status = ev;
 }

 public appInputSearch (event) : void {
   this.listOfCards = event;
 }

}
