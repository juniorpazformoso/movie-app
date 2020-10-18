import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CardMovie({ movie }) {
  const urlPoster = `https://image.tmdb.org/t/p/w780${movie.poster_path}`;

  return (
    <Card className="movie-card">
      <Card.Img src={urlPoster} />
    </Card>
  );
}

CardMovie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default CardMovie;
