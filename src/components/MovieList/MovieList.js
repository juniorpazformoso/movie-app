import React from 'react';
// import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import CardMovie from './CardMovie';

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

export default connect(mapStateToProps)(MovieList);
