# Movie SDK

## Description
Movie SDK is a software development kit that enables developers to easily integrate movie search and retrieval functionality into their applications. This SDK interacts with an external movie database API to fetch movie details, including random movie suggestions, specific movie searches, and detailed movie descriptions.

## Features
- **Fetch Random Movies**: Retrieve a list of 10 random movies for display on home screens or for movie discovery features.
- **Search Movies**: Allows users to search for movies based on titles or keywords.
- **Get Movie Details**: Provides detailed information about a specific movie, including title, year, rank, actors, and more.

## Installation
To install Movie SDK in your project, follow these steps:
```bash
yarn add git@github.com:angulemathias/movies-sdk.git
```
Or from npm:
```bash
yarn add ma-movies-sdk
```
Or if you're cloning directly from a repository:
```bash
git clone https://github.com/AnguleMathias/movies-sdk.git
cd movie-sdk
yarn
```

## API Reference

### `getMovie`
Fetches detailed information about a specific movie based on the search query.

**Parameters:**
- `query` (string): A search term, typically the title of the movie, used to query the movie database.

**Returns:**
- **Promise<MovieTypes | Error>**:
  - **MovieTypes**: An object containing detailed information about the movie if found.
  - **Error**: An error object if the movie is not found or if any other error occurs.

**Example Usage:**
```javascript
import { getMovie } from 'ma-movies-sdk';

async function searchMovie(query) {
  const movie = await getMovie(query);
  if (movie instanceof Error) {
    console.error("Error:", movie);
  } else {
    console.log("Movie Details:", movie);
  }
}

searchMovie("Inception");
```

### `getRandomMovies`
Retrieves a list of 10 random movies from the database. This is useful for features like displaying random movie suggestions on a home screen.

**Parameters:**
- None.

**Returns:**
- **Promise<{ results: MovieTypes[], errors: Error[] }>**:
  - **results (MovieTypes[])**: An array of movie objects.
  - **errors (Error[])**: An array of errors encountered during the fetch.

**Example Usage:**
```javascript
import { getRandomMovies } from 'ma-movies-sdk';

async function displayRandomMovies() {
  const { results, errors } = await getRandomMovies();
  if (errors.length) {
    errors.forEach(error => console.error(error));
  }
  console.log("Random Movies:", results);
}

displayRandomMovies();
```

### `getMovieDetails`
Fetches detailed information about a movie using its ID.

**Parameters:**
- `id` (string): The unique identifier for the movie.

**Returns:**
- **Promise<ResponseTypes | Error>**:
  - **ResponseTypes**: An object containing detailed information about the movie.
  - **Error**: An error object if the movie details cannot be retrieved.

**Example Usage:**
```javascript
import { getMovieDetails } from 'ma-movies-sdk';

async function fetchMovieDetails(id) {
  const details = await getMovieDetails(id);
  if (details instanceof Error) {
    console.error("Error fetching movie details:", details);
  } else {
    console.log("Movie Details:", details);
  }
}

fetchMovieDetails("tt1375666");
```

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the GNU License. See `LICENSE` for more information.
