import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { TransformPipe } from './config/transform.pipe';

@NgModule({
  declarations: [TransformPipe],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    
  ],
  bootstrap: []
})
export class SharedModule { }