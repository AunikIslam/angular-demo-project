import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared.module';
import { ApiCallsComponent } from './api-calls.component';

const routes: Routes = [
  {
    path: '**',
    component: ApiCallsComponent
  }
];

@NgModule( {
    declarations: [ ApiCallsComponent ],
    imports: [
      MatTableModule,
      RouterModule.forChild(routes), 
      FlexLayoutModule,
      CommonModule,
      MatIconModule, 
      MatFormFieldModule,
      MatInputModule,
      SharedModule
    ], 
    exports: [
      RouterModule
    ]
} )
export class ApiCallsModule {}