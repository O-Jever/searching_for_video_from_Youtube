import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { MaterialAppModule } from './ngmaterial.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomSelectComponent } from './custom-select/custom-select.component';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    MaterialAppModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    TestComponent,
    CustomSelectComponent
  ]
})
export class TestModule { }
