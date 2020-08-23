import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {
  @Input() showSpinner: boolean;
  @Output() search: EventEmitter<string> = new EventEmitter();

  searchTerm: string;

  constructor() { }

  ngOnInit(): void {
  }

  /* Emit search term
  */
  searchText(term: string): void {
    this.search.emit(term);
  }

  /* Clear search term and emit the empty string
   */
  clearSearchTerm(): void {
    this.searchTerm = '';
    this.searchText('');
  }
}
