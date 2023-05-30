import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'api-calls',
    loadChildren: () => import('./main/api-calls/api-calls.module').then(m => m.ApiCallsModule)
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
    FlexLayoutModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }