import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {

  @Output() search: EventEmitter<string> = new EventEmitter();

  searchTerm: string;

  constructor() { }

  ngOnInit(): void {
  }

  searchText(term: string): void {
    this.search.emit(term);
  }

}
