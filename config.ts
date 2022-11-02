// Configuration for News API
// Read more about the API here: https://newsapi.org/docs/

const API_URL: string = "https://newsapi.org/v2/";
const API_KEY: string | undefined = process.env.API_KEY;

const SEARCH_BASE_URL: string = `${API_URL}top-headlines?country=us&api_key=${API_KEY}`;
const POPULAR_BASE_URL: string = `${API_URL}movie/popular?api_key=${API_KEY}&lang`;
// For individual country
/*
Possible options: https://newsapi.org/docs/endpoints/top-headlines
*/
const countryUrl = (id?: string) =>
  `${API_URL}top-headlines?country=${id}&api_key=${API_KEY}`;

const IMAGE_BASE_URL: string = "http://image.tmdb.org/t/p/";
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE: string = "w1280";
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE: string = "w780";

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  countryUrl,
};
