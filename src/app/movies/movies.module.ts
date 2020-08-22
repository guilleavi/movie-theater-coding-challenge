import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesSearchPageComponent } from './containers/movies-search-page/movies-search-page.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DetailsViewComponent } from './components/details-view/details-view.component';
import { VotesFilterComponent } from './components/votes-filter/votes-filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    MoviesSearchPageComponent,
    SearchBarComponent,
    SearchResultsComponent,
    DetailsViewComponent,
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
