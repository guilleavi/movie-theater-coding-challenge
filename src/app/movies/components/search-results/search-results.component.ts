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
    this.scrollToElement(0);
  }

  /* Scroll to selected element
  */
  private scrollToElement(index): void {
    document.getElementById('result-item-' + index)?.scrollIntoView({behavior: 'smooth'});
  }

  /* Emit selected movie
  */
  select(item: Movie, index: number): void {
    this.selectedItemId = item.id;
    this.selectResult.emit(item);

    /* Adding timeout to be sure that the scroll changes after the details view is open
     * (this could be replace by a new input that shows when the detail view is already opened)
     */
    setTimeout(
      () => this.scrollToElement(index)
    );
  }

}
