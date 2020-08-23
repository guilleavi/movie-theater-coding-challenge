import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DetailsViewComponent } from './components/details-view/details-view.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { VotesFilterComponent } from './components/votes-filter/votes-filter.component';
import { MoviesSearchPageComponent } from './containers/movies-search-page/movies-search-page.component';

@NgModule({
  declarations: [
    DetailsViewComponent,
    MoviesSearchPageComponent,
    SearchBarComponent,
    SearchResultsComponent,
    VotesFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [
    MoviesSearchPageComponent
  ]
})
export class MoviesModule { }
