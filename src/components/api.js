import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "3924a3dacaa6ef4b17a703b0df801285";

export const getTrendMovies = async () => {
  const url = "/trending/movie/day";
  const options = {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  };
  const response = await axios.get(url, options);
  return response.data;
};
console.log(getTrendMovies());

export const getSerchMovie = async (query) => {
  const url = "/search/movie";
  const options = {
    params: {
      query,
      api_key: API_KEY,
      language: "en-US",
    },
  };
  const response = await axios.get(url, options);
  console.log(response);
  return response.data;
};

// console.log(getSerchMovie("The Iron Claw"));

export const getMovieDetails = async (movieId) => {
  const url = `/movie/${movieId}`;
  const options = {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  };
  const response = await axios.get(url, options);
  return response.data;
};
// console.log(getMovieDetails(533535));

export const getMovieCredits = async (movieId) => {
  const url = `/movie/${movieId}/credits`;
  const options = {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  };
  const response = await axios.get(url, options);

  return response.data.cast;
};
// console.log(getMovieCredits(29222));

export const getMovieReviews = async (movieId) => {
  const url = `/movie/${movieId}/reviews`;
  const options = {
    params: {
      api_key: API_KEY,
      language: "en-US",
    },
  };
  const response = await axios.get(url, options);
  console.log(response);
  return response.data.results;
};
// console.log(getMovieReviews(634492));