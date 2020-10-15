import {
  FETCH_MOVIES_INITIATED,
  FETCH_MOVIES_FAILED,
  FETCH_MOVIES_SUCCEEDED
} from '../actions/types';

const initialState = {
  movies: [],
  isLoading: false,
  errorFetchMovies: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_INITIATED:
      return {
        ...state,
        errorFetchMovies: false,
        isLoading: true
      };
    case FETCH_MOVIES_SUCCEEDED:
      return {
        ...state,
        errorFetchMovies: false,
        isLoading: false,
        movies: action.payload
      };
    case FETCH_MOVIES_FAILED:
      return {
        ...state,
        errorFetchMovies: true,
        isLoading: false
      };
    default:
      return state;
  }
}
