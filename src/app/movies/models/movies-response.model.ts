import { Movie } from '.';

export interface MoviesResponse {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
}
