import { MovieTypes } from "../types/movieTypes";
export declare class MovieSdk {
    /**
     * Fetches a movie from the API
     * @param query - The movie title to search for
     * @returns The movie data or an error
     */
    static getMovie(query: string): Promise<MovieTypes | Error>;
    /**
     * Fetches 10 random movies from the API
     * @returns An object containing the results and errors
     */
    static getRandomMovies(): Promise<{
        results: MovieTypes[];
        errors: Error[];
    }>;
}
