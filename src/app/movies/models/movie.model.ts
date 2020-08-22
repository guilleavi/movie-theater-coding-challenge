export interface Movie {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    genre_ids: number[];
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    original_language: string;
    popularity: number;
    vote_count: number;
    vote_average: number;
    adult: boolean;
    video: boolean;
}
