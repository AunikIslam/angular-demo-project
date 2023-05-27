import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule)
  }
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    MatToolbarModule,
    MatCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }