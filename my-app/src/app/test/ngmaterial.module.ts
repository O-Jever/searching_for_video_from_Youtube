import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

@NgModule({
imports: [MatInputModule],
exports: [MatInputModule]
})
export class MaterialAppModule { }
