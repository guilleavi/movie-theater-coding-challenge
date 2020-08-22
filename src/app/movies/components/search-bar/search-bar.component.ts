import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, OnChanges, Input } from '@angular/core';

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
  visibleSpinner: true;
  testValue: string;

  constructor() { }

  ngOnInit(): void {
  }

  searchText(term: string): void {
    if (term && typeof term === 'string') {
      this.search.emit(term);
    }
  }
}
