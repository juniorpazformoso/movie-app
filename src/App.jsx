import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import './styles/styles.scss';
import PopularMovies from './pages/PopularMovies'

function App() {
  return (
    <Provider store={store}>
      <PopularMovies />
    </Provider>
  );
}

export default App;
