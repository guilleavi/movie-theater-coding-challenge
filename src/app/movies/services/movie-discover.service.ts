import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { UrlConstants } from '../constants/url.constants';
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

  /**
   * Return suggested movies sorted by popularity desc
   */
  discoverMovies(): void {
    const url = `${UrlConstants.DISCOVER}?api_key=${UrlConstants.API_KEY}&sort_by=popularity.desc`;

    this.httpClient.get<MoviesResponse>(url).subscribe(
      result => this.moviesResultSource.next(result)
    );
  }

  /**
   * Search movies using search term
   */
  searchMovies(searchTerm: string): void {
    if (searchTerm && typeof searchTerm === 'string') {
      const url = `${UrlConstants.SEARCH}?api_key=${UrlConstants.API_KEY}&query=${searchTerm}`;

      this.httpClient.get<MoviesResponse>(url).subscribe(
        result => this.moviesResultSource.next(result)
      );
    }
  }
}
