import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import CardMovie from './CardMovie';

function MovieList() {
  return (
    <Container>
      <Row>
        <CardMovie
          url={
            'https://www.joblo.com/assets/images/joblo/posters/2019/02/detective-pikachu-trailer-poster-main.jpg'
          }
        />
        <CardMovie
          url={
            'https://www.joblo.com/assets/images/joblo/posters/2019/01/Alita-character-poster-1.jpg'
          }
        />
        <CardMovie
          url={
            'https://www.joblo.com/assets/images/joblo/posters/2018/11/Spider-Verse-poster-1.jpg'
          }
        />
        <CardMovie
          url={
            'https://www.joblo.com/assets/images/joblo/posters/2018/11/Spider-Verse-poster-1.jpg'
          }
        />
      </Row>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    movies: state.moviesState.movies
  };
};

export default connect(mapStateToProps)(MovieList);
