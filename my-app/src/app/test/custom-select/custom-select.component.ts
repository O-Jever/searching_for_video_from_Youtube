import { Component, forwardRef, Input, ElementRef, ViewChild, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";

@Component({
  selector: 'custom-select',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomSelectComponent),
      multi: true,
    }
  ],
  host: {'(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()'},
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements ControlValueAccessor {

  @Input('options') options;

  @ViewChild('currentValue') element: ElementRef;

  @HostListener ('click', ['$event']) onClick(e: MouseEvent) {
    if (!this.element.nativeElement.contains(e.target)) {
      this.visibility = false;
    } else {
      this.visibility = true;
    }
  }

  public visibility : boolean = false;
  public currentValueOfSelect : string = 'Выберите элемент';

  writeValue(value) {
    this.onChange(value);
  }

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  public changeCurrentValue(changes) : void {
    //console.log("Событие на кнопках" ,changes);
    this.currentValueOfSelect = changes.target.value; 
    this.writeValue(this.currentValueOfSelect);
    this.onTouched();
    this.visibility = false;
  }
  
}
