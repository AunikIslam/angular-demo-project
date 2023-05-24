import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatTable } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbar,
    MatIcon,
    HttpClientModule,
    MatTable,
    MatButtonModule
  ],
  declarations: []
})
export class AppModule { }