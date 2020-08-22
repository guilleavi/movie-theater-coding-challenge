import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
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

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedItemId = 0;
  }

  select(item: Movie): void {
    this.selectedItemId = item.id;
    this.selectResult.emit(item);
  }

}
