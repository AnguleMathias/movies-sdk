# Project Name: Movie SDK

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
Or if you're cloning directly from a repository:
```bash
git clone https://github.com/AnguleMathias/movies-sdk.git
cd movie-sdk
yarn
```

## API Reference

#### 1. `getMovie`
Fetches detailed information about a specific movie based on the search query.

**Parameters:**
- `query` (string): A search term, typically the title of the movie, used to query the movie database.

**Returns:**
- **Promise<MovieTypes | Error>**:
  - **MovieTypes**: An object containing detailed information about the movie if found.
  - **Error**: An error object if the movie is not found or if any other error occurs.

**Example Usage:**
```javascript
MovieSDK.getMovie("Inception").then(movie => {
  console.log(movie);
}).catch(error => {
  console.error(error);
});
```

**Response Example (MovieTypes):**
```json
{
  "#TITLE": "Inception",
  "#YEAR": 2010,
  "#IMDB_ID": "tt1375666",
  "#RANK": 10,
  "#ACTORS": "Leonardo DiCaprio, Joseph Gordon-Levitt",
  "#AKA": "Inception (2010)",
  "#IMDB_URL": "https://imdb.com/title/tt1375666",
  "#IMDB_IV": "https://imdb.com/title/tt1375666",
  "#IMG_POSTER": "https://example.com/poster.jpg",
  "photo_width": 1000,
  "photo_height": 1500
}
```

#### 2. `getRandomMovies`
Retrieves a list of 10 random movies from the database. This is useful for features like displaying random movie suggestions on a home screen.

**Parameters:**
- None.

**Returns:**
- **Promise<{ results: MovieTypes[], errors: Error[] }>**:
  - **results (MovieTypes[])**: An array of movie objects.
  - **errors (Error[])**: An array of errors encountered during the fetch.

**Example Usage:**
```javascript
MovieSDK.getRandomMovies().then(response => {
  if (response.errors.length > 0) {
    response.errors.forEach(error => console.error(error));
  }
  console.log(response.results);
});
```

**Response Example:**
```json
{
  "results": [
    {
      "#TITLE": "Random Movie",
      "#YEAR": 2020,
      "#IMDB_ID": "tt1234567",
      "#RANK": 150,
      "#ACTORS": "Actor Name",
      "#AKA": "Random Movie (2020)",
      "#IMDB_URL": "https://imdb.com/title/tt1234567",
      "#IMG_POSTER": "https://example.com/random-movie.jpg",
      "photo_width": 800,
      "photo_height": 1200
    }
  ],
  "errors": []
}
```

## Usage
Here is how you can use Movie SDK to fetch random movies and search for specific movies:

#### Fetch Random Movies
```javascript
import { MovieSDK } from 'ma-movies-sdk';

async function displayRandomMovies() {
  const { results, errors } = await MovieSDK.getRandomMovies();
  if (errors.length) {
    console.error("Errors:", errors);
  }
  console.log("Random Movies:", results);
}

displayRandomMovies();
```

#### Search for a Movie
```javascript
import { MovieSDK } from 'ma-movies-sdk';

async function searchMovies(query) {
  const movie = await MovieSDK.getMovie(query);
  if (movie instanceof Error) {
    console.error("Search Error:", movie);
  } else {
    console.log("Movie Details:", movie);
  }
}

searchMovies("Inception");
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
