import { Component, forwardRef, Input, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, SelectControlValueAccessor } from "@angular/forms";

@Component({
  selector: 'custom-select',
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => CustomSelectComponent),
  //     multi: true,
  //   }
  // ],
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent {

  @Input('masSelect') masSelect;
  public visibility : boolean = false;
  public currentValueOfSelect : string = 'Выберите элемент';
  
  constructor() {} 

  public currentValue() : void {
    this.visibility = true;
  }

  public changeCurrentValue(changes) : void {
    this.currentValueOfSelect = changes.target.value; 
    this.visibility = false;
  }
  
}
