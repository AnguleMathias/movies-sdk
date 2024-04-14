import { MovieTypes, ResponseTypes } from "../types/movieTypes";
/**
 * Fetches a movie from the API
 * @param query - The movie title to search for
 * @returns The movie data or an error
 */
export declare const getMovie: (query: string) => Promise<MovieTypes | Error>;
/**
 * Fetches 10 random movies from the API
 * @returns An object containing the results and errors
 */
export declare const getRandomMovies: () => Promise<{
    results: MovieTypes[];
    errors: Error[];
}>;
/**
 * Fetches movie details by ID from the API
 * @param id - The movie ID
 * @returns an object containing the movie details or an error
 */
export declare const getMovieDetails: (id: string) => Promise<ResponseTypes | Error>;
