import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { MaterialAppModule } from './ngmaterial.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    MaterialAppModule,
    FormsModule
  ],
  declarations: [TestComponent]
})
export class TestModule { }
