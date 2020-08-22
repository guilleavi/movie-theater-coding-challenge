import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MoviesResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MovieDiscoverService {

  private moviesResultSource: BehaviorSubject<MoviesResponse> = new BehaviorSubject<MoviesResponse>({} as MoviesResponse);
  moviesResult$: Observable<MoviesResponse> = this.moviesResultSource.asObservable();

  constructor(
    private httpClient: HttpClient
  ) { }

  // TODO: add loader

  /**
   * Return suggested movies sorted by popularity (no pagination)
   */
  discoverMovies(): void  {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=c8c19f0aef08483bb74150baa6f6a205&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

    this.httpClient.get<MoviesResponse>(url).subscribe(
      result => this.moviesResultSource.next(result)
    );
  }

  searchMovies(searchTerm: string): void {
    if (searchTerm && typeof searchTerm === 'string') {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=c8c19f0aef08483bb74150baa6f6a205&language=en-US&query=${searchTerm}&page=1&include_adult=false`;

      this.httpClient.get<MoviesResponse>(url).subscribe(
        result => this.moviesResultSource.next(result)
      );
    }
  }
}
