import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

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

  MAX_STARS = 5;

  constructor() { }

  ngOnInit(): void {
    this.resetVotes();
  }

  /* Initialize votes filter unselecting all the stars
   */
  resetVotes(): void {
    this.selectedStars = 0;
    this.unselectedStars = this.MAX_STARS;
    this.setVoteValue(this.selectedStars);
  }

  /* Update stars selection
   */
  updateVotes(starIndex: number, select: boolean): void {
    const newSelectionIndex = starIndex + (select ? 0 : this.selectedStars);
    const disableFilter = newSelectionIndex === this.selectedStars;

    this.selectedStars = disableFilter ? 0 : newSelectionIndex;
    this.unselectedStars = disableFilter ? this.MAX_STARS : this.MAX_STARS - newSelectionIndex;

    this.setVoteValue(this.selectedStars);
  }

  /* Emit vote value
  */
  setVoteValue(voteValue: number): void {
    this.vote.emit(voteValue);
  }

}
