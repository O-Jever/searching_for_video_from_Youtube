import { Component, forwardRef, Input, ElementRef, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, SelectControlValueAccessor } from "@angular/forms";

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
  public visibility = false;
  public currentValueOfSelect = 'Выберите элемент';
  
  constructor() {} 

  currentValue() {
    this.visibility = true;
  }

  changeCurrentValue(changes) {
    this.currentValueOfSelect = changes.target.value; 
    this.visibility = false;
  }
  
}
