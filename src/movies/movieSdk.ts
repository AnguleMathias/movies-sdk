import axios from "axios";
import { MovieTypes, ResponseTypes } from "../types/movieTypes";
import { movieList } from "./movieList";
import { shuffleAndSelect } from "../utils/utils";

const BASE_URL = "https://search.imdbot.workers.dev";

/**
 * Fetches a movie from the API
 * @param query - The movie title to search for
 * @returns The movie data or an error
 */
export const getMovie = async (query: string): Promise<MovieTypes | Error> => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { q: query },
    });
    if (response.data.ok) {
      return response.data.description as MovieTypes;
    } else {
      return new Error(`API Error: ${response.data.error_code}`);
    }
  } catch (error) {
    return new Error("Failed to fetch movie");
  }
};

/**
 * Fetches 10 random movies from the API
 * @returns An object containing the results and errors
 */
export const getRandomMovies = async (): Promise<{
  results: MovieTypes[];
  errors: Error[];
}> => {
  const selectedMovies = shuffleAndSelect(movieList, 10);

  const promises = selectedMovies.map((query) =>
    getMovie(query)
      .then((result) =>
        result instanceof Error ? { error: result } : { result }
      )
      .catch((error) => ({ error: new Error(error.toString()) }))
  );

  const resultsAndErrors = await Promise.all(promises);
  let results: MovieTypes[] = [];
  let errors: Error[] = [];

  resultsAndErrors.forEach((item) => {
    if (item.error) {
      errors.push(item.error);
    } else if (item.result) {
      // Ensure result is not an array and only unique items are added
      if (Array.isArray(item.result)) {
        item.result.forEach((res) => {
          if (
            !results.some(
              (existingRes) => existingRes["#IMDB_ID"] === res["#IMDB_ID"]
            )
          ) {
            results.push(res as MovieTypes);
          }
        });
      } else {
        if (
          !results.some(
            (existingRes) => existingRes["#IMDB_ID"] === item.result["#IMDB_ID"]
          )
        ) {
          results.push(item.result as MovieTypes);
        }
      }
    }
  });

  results = shuffleAndSelect(results, 10);

  return { results, errors };
};

/**
 * Fetches movie details by ID from the API
 * @param id - The movie ID
 * @returns an object containing the movie details or an error
 */
export const getMovieDetails = async (
  id: string
): Promise<ResponseTypes | Error> => {
  try {
    const response = await axios.get(`${BASE_URL}`, { params: { tt: id } });
    return response.data as ResponseTypes;
  } catch (error) {
    return error as Error;
  }
};
