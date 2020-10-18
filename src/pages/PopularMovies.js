import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getMovies } from '../actions/moviesAction';
import MovieList from '../components/MovieList';
import env from '../config/env';
import PropTypes from 'prop-types';

const PopularMovies = ({ getMovies }) => {
  const url = `/discover/movie?api_key=${env.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

  useEffect(() => {
    getMovies(url);
  }, [getMovies, url]);

  return (
    <>
      <MovieList />
    </>
  );
};

const mapStateToProps = state => {
  return {
    errorFetchMovies: state.moviesState.errorFetchMovies,
    isLoading: state.moviesState.isLoading
  };
};

PopularMovies.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getMovies })(PopularMovies);
