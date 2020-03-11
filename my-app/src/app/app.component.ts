 import { Component, ViewChild } from '@angular/core';
 import { from, Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listOfCards: any[] = [];
  status: string = "Начните поиск";
  
  constructor () {
  }

  responceStatus(ev) {
    this.status = ev;
    console.log("Статус ответа", this.status);
  }

  appInputSearch(event) {
    this.listOfCards = event;
    console.log('Какая-то фигня', this.listOfCards);
  }

}
