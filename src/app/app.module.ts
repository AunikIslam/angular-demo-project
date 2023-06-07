import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from './main/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';

const routes: Routes = [
  {
    path: 'api-calls',
    loadChildren: () => import('./main/api-calls/api-calls.module').then(m => m.ApiCallsModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./main/student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'graphs',
    loadChildren: () => import('./main/graphs/graph.module').then(m => m.GraphsModule)
  }
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    SharedModule,
    NgApexchartsModule
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }