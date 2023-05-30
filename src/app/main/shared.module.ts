import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TransformPipe } from './config/transform.pipe';

@NgModule({
  declarations: [TransformPipe],
  imports: [
    CommonModule
  ],
  exports: [
    
  ],
  bootstrap: []
})
export class SharedModule { }