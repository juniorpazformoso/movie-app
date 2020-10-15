import { FETCH_MOVIES_INITIATED, FETCH_MOVIES_FAILED, FETCH_MOVIES_SUCCEEDED } from './types';

import tmdb from '../api/tmdb';

export const getMovies = url => async dispatch => {
  dispatch({ type: FETCH_MOVIES_INITIATED });

  try {
    const apiResponse = await tmdb.get(url);

    dispatch({
      type: FETCH_MOVIES_SUCCEEDED,
      payload: apiResponse.data.results
    });
  } catch (error) {
    dispatch({ type: FETCH_MOVIES_FAILED });
  }
};
