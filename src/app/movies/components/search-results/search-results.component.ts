import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

import { Movie } from '../../models';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnInit, OnChanges {

  @Input() resultsList: Movie[] = [];
  @Output() selectResult: EventEmitter<Movie> = new EventEmitter();

  selectedItemId: number;

  constructor() { }

  ngOnInit(): void {
  }

  /* Unselect movie every time results list changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.selectedItemId = 0;
  }

  /* Emit selected movie
  */
  select(item: Movie): void {
    this.selectedItemId = item.id;
    this.selectResult.emit(item);
  }

}
