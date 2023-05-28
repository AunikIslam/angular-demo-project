import { NgModule } from '@angular/core';
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
      RouterModule.forChild(routes)
    ], 
    exports: [
      RouterModule,
      MatTableModule
    ]
} )
export class ApiCallsModule {}