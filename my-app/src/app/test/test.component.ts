import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})


export class TestComponent implements OnInit {

  reactForm : FormGroup;

  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  
  initForm(){
    this.reactForm = this.formBuilder.group({    
      "customSelect": ["", [Validators.required]],
    });
   }

  public custSelect = [
    { value: 'phone', title: 'Phone', },
    { value: 'e-mail', title: 'E-mail', },
    { value: 'skype', title: 'Skype', },
  ];

  onSubmit() {
    console.log("Данные с формы" ,this.reactForm.value);
  }

}
