import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnInit {

  @Input() resultsList: Movie[] = [];
  @Output() selectResult: EventEmitter<Movie> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select(result: Movie): void {
    this.selectResult.emit(result);
  }

}
