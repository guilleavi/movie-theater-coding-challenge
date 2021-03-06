import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MovieDiscoverService } from './movie-discover.service';

describe('MovieDiscoverService', () => {
  let service: MovieDiscoverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(MovieDiscoverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
