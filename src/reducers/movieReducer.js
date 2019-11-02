import { GET_MOVIES, GET_MOVIE, RESET_MOVIE } from "../actions/getMovies";

const initialState = {
  movies: [],
  moviesLoaded: false,
  movie: {},
  movieLoaded: false
};

const movieReducer = (state = initialState, action) => {
  const { type, data, movie } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: data,
        moviesLoaded: true
      };
    case GET_MOVIE:
      return {
        ...state,
        movie,
        movieLoaded: true
      };
      case RESET_MOVIE:
        return {
          ...state,
          movie: {},
          movieLoaded: false
        };
    default:
      return state;
  }
};

export default movieReducer;
