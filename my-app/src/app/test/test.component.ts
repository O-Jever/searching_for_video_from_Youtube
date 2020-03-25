import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})



export class TestComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor() {}

  public custSelect = [
    { value: 'phone', title: 'Phone', },
    { value: 'e-mail', title: 'E-mail', },
    { value: 'skype', title: 'Skype', },
  ];

}
