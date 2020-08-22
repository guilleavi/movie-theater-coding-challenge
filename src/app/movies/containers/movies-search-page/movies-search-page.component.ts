import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MovieDiscoverService } from '../../services/movie-discover.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { VotesFilterComponent } from '../../components/votes-filter/votes-filter.component';
import { Movie } from '../../models';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';

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
    this.subscriptions.add(this.movieDiscoverService.moviesResult$.subscribe(result => {
      this.selectedMovie = null;
      this.moviesResult = result.results;
      this.votesFilterComponent?.resetVotes();
      this.showSpinner = false;
    }));
    this.movieDiscoverService.discoverMovies();
  }

  searchMovies(searchTerm: string): void {
    if (searchTerm && typeof searchTerm === 'string') {
      this.showSpinner = true;
      this.movieDiscoverService.searchMovies(searchTerm);
    }
  }

  filterByVotes(voteValue: number): void {
    this.selectedMovie = null;
    const maxRate = voteValue * 2;
    const minRate = maxRate - 2;
    this.movieDiscoverService.moviesResult$.pipe(first()).subscribe(moviesResult => {
      if (moviesResult && moviesResult.results) {
        let newMoviesResult = [...moviesResult.results];
        if (maxRate) {
          const filteredResults = moviesResult.results.filter(result =>
            result.vote_average <= maxRate && result.vote_average >= minRate
          );
          newMoviesResult = filteredResults;
        }
        this.moviesResult = newMoviesResult;
      }
    });
  }

  showDetails(movie: Movie): void {
    this.selectedMovie = movie;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
