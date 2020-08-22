import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesFilterComponent } from './votes-filter.component';

describe('VotesFilterComponent', () => {
  let component: VotesFilterComponent;
  let fixture: ComponentFixture<VotesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
