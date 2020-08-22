import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsViewComponent implements OnInit {

  @Input() details: any;

  constructor() { }

  ngOnInit(): void {
  }

}
