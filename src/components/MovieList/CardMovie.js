import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CardMovie(props) {
  const { url } = props;

  return (
    <Card className="movie_card">
      <Card.Img src={url} />
      <Card.Body>Titulito</Card.Body>
    </Card>
  );
}

CardMovie.propTypes = {
  url: PropTypes.string
};

export default CardMovie;
