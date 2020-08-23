import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesSearchPageComponent } from './movies/containers/movies-search-page/movies-search-page.component';

const ROUTES: Routes = [
  {
    path: '',
    component: MoviesSearchPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
