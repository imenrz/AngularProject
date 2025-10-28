import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransformDatePipe } from './pipes/transform-date.pipe';



@NgModule({
  declarations: [
    TransformDatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
