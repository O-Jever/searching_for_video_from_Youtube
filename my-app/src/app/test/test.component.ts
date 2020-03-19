import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  value: any;

  constructor() { }

  ngOnInit(): void {
  }

  search () {
    console.log("Это инпут", this.value);
  }

}
