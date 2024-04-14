import axios from "axios";
import { getMovie, getMovieDetails, getRandomMovies, } from "../src/movies/movieSdk";
// Mock axios to avoid actual API calls
jest.mock("axios");
const mockedAxios = axios;
describe("Movie Data Fetching Functions", () => {
    const BASE_URL = "https://search.imdbot.workers.dev";
    const movieData = {
        "#ACTORS": "Leonardo DiCaprio, Joseph Gordon-Levitt",
        "#AKA": "Inception (2010)",
        "#IMDB_ID": "tt1375666",
        "#IMDB_IV": "https://imdb.com/title/tt1375666",
        "#IMDB_URL": "https://imdb.com/title/tt1375666",
        "#IMG_POSTER": "https://example.com/poster.jpg",
        "#RANK": 10,
        "#TITLE": "Inception",
        "#YEAR": 2010,
        photo_height: 1500,
        photo_width: 1000,
    };
    describe("getMovie", () => {
        it("should fetch and return movie data", async () => {
            const response = {
                data: {
                    ok: true,
                    description: movieData,
                    error_code: 200,
                },
            };
            mockedAxios.get.mockResolvedValue(response);
            const result = await getMovie("Inception");
            expect(result).toEqual(movieData);
            expect(mockedAxios.get).toHaveBeenCalledWith(`${BASE_URL}/search`, {
                params: { q: "Inception" },
            });
        });
        it("should handle errors from the API", async () => {
            mockedAxios.get.mockRejectedValue(new Error("API failed"));
            const result = await getMovie("Random Movie");
            expect(result).toBeInstanceOf(Error);
        });
    });
    describe("getRandomMovies", () => {
        it("should fetch and return movie data for multiple movies", async () => {
            const response = {
                data: {
                    ok: true,
                    description: movieData,
                },
            };
            mockedAxios.get.mockResolvedValue(response);
            const { results, errors } = await getRandomMovies();
            // Expectations about the results
            expect(results).not.toHaveLength(0);
            expect(errors).toHaveLength(0);
        });
        it("should handle errors when fetching movie details", async () => {
            mockedAxios.get.mockImplementation(() => Promise.reject(new Error("Failed to fetch movie")));
            const { results, errors } = await getRandomMovies();
            expect(results.length).toBe(0);
            expect(errors.length).toBeGreaterThan(0);
            // Check that all errors contain the correct message
            errors.forEach((error) => expect(error.message).toContain("Failed to fetch movie"));
        });
    });
    describe("getMovieDetails", () => {
        const BASE_URL = "https://search.imdbot.workers.dev";
        it("should fetch and return detailed movie data", async () => {
            const response = {
                data: movieData,
            };
            mockedAxios.get.mockResolvedValue(response);
            const result = await getMovieDetails("tt1375666");
            expect(result).toEqual(movieData);
            expect(mockedAxios.get).toHaveBeenCalledWith(`${BASE_URL}`, {
                params: { tt: "tt1375666" },
            });
        });
        it("should handle errors when fetching movie details by ID", async () => {
            mockedAxios.get.mockRejectedValue(new Error("Failed to fetch movie details"));
            const result = await getMovieDetails("nonexistent-id");
            expect(result).toBeInstanceOf(Error);
        });
    });
});
