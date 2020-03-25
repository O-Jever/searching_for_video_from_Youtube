import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
imports: [
    MatInputModule,
    MatSelectModule
],
exports: [
    MatInputModule,
    MatSelectModule
]
})
export class MaterialAppModule { }
