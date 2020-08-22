import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnInit {

  @Input() resultsList: any[] = [];
  @Output() selectResult: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  select(result: any): void {
    this.selectResult.emit(result);
  }

}
