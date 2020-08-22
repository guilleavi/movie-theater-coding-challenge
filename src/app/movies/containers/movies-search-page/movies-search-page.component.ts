import { Component, OnInit } from '@angular/core';
import { MovieDiscoverService } from '../../services/movie-discover.service';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './movies-search-page.component.html',
  styleUrls: ['./movies-search-page.component.scss']
})
export class MoviesSearchPageComponent implements OnInit {

  moviesResult$: Observable<any[]>; // TODO: create movie model
  selectedMovie: any;

  constructor(
    private movieDiscoverService: MovieDiscoverService
  ) { }

  ngOnInit(): void {
    this.selectedMovie = {};
    this.moviesResult$ = this.movieDiscoverService.moviesResult$;
    this.movieDiscoverService.discoverMovies();
  }

  searchMovies(searchTerm: string): void {
    this.movieDiscoverService.searchMovies();
  }

  showDetails(movie: any): void {
    this.selectedMovie = movie;
  }

}
