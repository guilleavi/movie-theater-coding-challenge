import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { VotesFilterComponent } from '../../components/votes-filter/votes-filter.component';
import { Movie } from '../../models';
import { MovieDiscoverService } from '../../services/movie-discover.service';

@Component({
  templateUrl: './movies-search-page.component.html',
  styleUrls: ['./movies-search-page.component.scss']
})
export class MoviesSearchPageComponent implements OnInit, OnDestroy {

  @ViewChild(VotesFilterComponent)
  private votesFilterComponent: VotesFilterComponent;

  subscriptions: Subscription = new Subscription();

  moviesResult: Movie[];
  selectedMovie: Movie;
  showSpinner: boolean;

  constructor(
    private movieDiscoverService: MovieDiscoverService
  ) { }

  ngOnInit(): void {
    /* Keep subscription open to keep the movies results updates*/
    this.subscriptions.add(this.movieDiscoverService.moviesResult$.subscribe(result => {
      this.moviesResult = result?.results ? JSON.parse(JSON.stringify(result.results)) : [];
      this.resetUserSelections();

      this.showSpinner = false;
    }));
    /* Fill the movies results with the discover movies at the init */
    this.movieDiscoverService.discoverMovies();
  }

  /*
   * Search movies by a term
   */
  searchMovies(searchTerm: string): void {
    this.showSpinner = true;

    const hasValidSearchTerm = searchTerm && typeof searchTerm === 'string';
    if (hasValidSearchTerm) {
      this.movieDiscoverService.searchMovies(searchTerm);
    } else {
      this.movieDiscoverService.discoverMovies();
    }
  }

  /*
   * Filter movies by its rate
   */
  filterByVotes(voteValue: number): void {
    this.selectedMovie = null;
    const maxRate = voteValue * 2;
    const minRate = maxRate - 2;

    /* Filter by rate over the full list of movies results */
    this.movieDiscoverService.moviesResult$.pipe(first()).subscribe(moviesResult => {

      const hasMovies = moviesResult && moviesResult.results && moviesResult.results.length;
      if (hasMovies) {
        const results = JSON.parse(JSON.stringify(moviesResult.results));
        if (maxRate > 0) {
          this.moviesResult = results.filter((result: Movie) =>
            result.vote_average <= maxRate && result.vote_average >= minRate
          );
        } else {
          this.moviesResult = results;
        }
      }

    });
  }

  /*
   * Show selected movie details
   */
  showDetails(movie: Movie): void {
    this.selectedMovie = movie;
  }

  private resetUserSelections(): void {
    this.selectedMovie = null;
    this.votesFilterComponent?.resetVotes();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
