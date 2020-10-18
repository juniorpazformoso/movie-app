import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CardMovie(props) {
  const { url } = props;

  return (
    <Card className="movie-card">
      <Card.Img src={url} />
    </Card>
  );
}

CardMovie.propTypes = {
  url: PropTypes.string
};

export default CardMovie;
