import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RotateControlComponent } from './rotate-control.component';

@NgModule({
  declarations: [
    RotateControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    RotateControlComponent
  ]
})
export class RotateControlModule { }
