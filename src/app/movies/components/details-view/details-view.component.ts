import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

import { GenreConstants } from '../../constants/genre.constants';
import { Genre, Movie } from '../../models';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsViewComponent implements OnInit {
  @Input() details: Movie;

  fasStar = fasStar;

  constructor() { }

  ngOnInit(): void {
  }

  /* Get genre descriptions by ids
   */
  getGenres(genreIds: number[]): string {
    let genresString = '';

    const hasIds = genreIds && genreIds.length;
    if (hasIds) {
      genreIds.forEach(id => {
        const genres: Genre[] = GenreConstants.filter(gen => gen.id === +id);

        const genreFound = genres.length && genres[0] && genres[0].name;
        if (genreFound) {
          genresString = genresString + genres[0].name + ', ';
        }
      });
    }

    return genresString.replace(/,\s*$/, ''); // remove trailing comma
  }

}
