import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
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
      CommonModule
    ], 
    exports: [
      RouterModule
    ]
} )
export class ApiCallsModule {}