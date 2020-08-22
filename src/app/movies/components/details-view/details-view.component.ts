import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Movie, Genre } from '../../models';
import { GenreConstants } from '../../constants/genre.constants';

import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsViewComponent implements OnInit {
  fasStar = fasStar;

  @Input() details: Movie;

  constructor() { }

  ngOnInit(): void {
  }

  getGenres(genreIds: number[]): string {
    let genresString = '';
    if (genreIds && genreIds.length) {
      genreIds.forEach(id => {
        const genres: Genre[] =  GenreConstants.filter(gen => gen.id === +id);
        if (genres.length && genres[0] && genres[0].name) {
          genresString = genresString +  genres[0].name + ', ';
        }
      });
    }
    return genresString.replace(/,\s*$/, ''); // remove trailing comma
  }

}
