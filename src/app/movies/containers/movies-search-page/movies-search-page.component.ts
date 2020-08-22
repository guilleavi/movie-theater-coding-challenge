import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MovieDiscoverService } from '../../services/movie-discover.service';
import { Observable, Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { VotesFilterComponent } from '../../components/votes-filter/votes-filter.component';

@Component({
  templateUrl: './movies-search-page.component.html',
  styleUrls: ['./movies-search-page.component.scss']
})
export class MoviesSearchPageComponent implements OnInit, OnDestroy {

  @ViewChild(VotesFilterComponent)
  private votesFilterComponent: VotesFilterComponent;

  subscriptions: Subscription = new Subscription();

  moviesResult: any[]; // TODO: create movie model
  selectedMovie: any;

  constructor(
    private movieDiscoverService: MovieDiscoverService
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(this.movieDiscoverService.moviesResult$.subscribe(result => {
      this.selectedMovie = undefined;
      this.moviesResult = result;
      console.log('reset', this.votesFilterComponent);
      this.votesFilterComponent?.resetVotes();
    }));
    this.movieDiscoverService.discoverMovies();
  }

  searchMovies(searchTerm: string): void {
    this.movieDiscoverService.searchMovies();
  }

  filterByVotes(voteValue: number): void {
    const maxRate = voteValue * 2;
    const minRate = maxRate - 2;
    this.movieDiscoverService.moviesResult$.pipe(first()).subscribe(moviesResult => {
      if (moviesResult && moviesResult.results) {
        const newMoviesResult = { ...this.moviesResult };
        if (maxRate) {
          const filteredResults = moviesResult?.results.filter(result =>
            result.vote_average <= maxRate && result.vote_average >= minRate
          );
          newMoviesResult.results = filteredResults;
        }
        this.moviesResult = newMoviesResult;
      }
    });
  }

  showDetails(movie: any): void {
    this.selectedMovie = movie;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
