import { Movie } from './index';

export interface MoviesResponse {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
}
