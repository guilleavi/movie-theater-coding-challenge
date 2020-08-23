import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSearchPageComponent } from './movies-search-page.component';
import { HttpClientModule } from '@angular/common/http';

describe('MoviesSearchPageComponent', () => {
  let component: MoviesSearchPageComponent;
  let fixture: ComponentFixture<MoviesSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MoviesSearchPageComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
