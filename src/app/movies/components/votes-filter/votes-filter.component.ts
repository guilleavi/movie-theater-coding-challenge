import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-votes-filter',
  templateUrl: './votes-filter.component.html',
  styleUrls: ['./votes-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VotesFilterComponent implements OnInit {
  @Output() vote: EventEmitter<number> = new EventEmitter();

  fasStar = fasStar;
  farStar = farStar;

  selectedStars: number;
  unselectedStars: number;
  testValue: string;

  MAX_STARS = 5;

  constructor() { }

  ngOnInit(): void {
    this.resetVotes();
  }

  resetVotes(): void {
    this.testValue = 'Hide';
    this.selectedStars = 0;
    this.unselectedStars = this.MAX_STARS;
    this.setVoteValue(this.selectedStars);
  }

  updateStars(starIndex: number, select: boolean): void {
    const newSelectionIndex = starIndex + (select ? 0 : this.selectedStars);
    const disableFilter = newSelectionIndex === this.selectedStars;

    this.selectedStars = disableFilter ? 0 : newSelectionIndex;
    this.unselectedStars = disableFilter ? this.MAX_STARS : this.MAX_STARS - newSelectionIndex;

    this.testValue = 'Show';
    this.setVoteValue(this.selectedStars);
  }

  setVoteValue(voteValue: number): void {
    this.vote.emit(voteValue);
  }

}
