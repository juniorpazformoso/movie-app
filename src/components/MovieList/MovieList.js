import React from 'react';
import { connect } from 'react-redux';
import CardMovie from './CardMovie';
import PropTypes from 'prop-types';

function MovieList({ movies }) {
  const moviesMarkup = movies.map(movie => {
    return <CardMovie movie={movie} key={movie.id} />;
  });

  return <div className="card-grid">{moviesMarkup}</div>;
}

const mapStateToProps = state => {
  return {
    movies: state.moviesState.movies
  };
};

MovieList.propTypes = {
  movies: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(MovieList);
