import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Home from './src/pages/Home';
import { store as reducers } from './src/redux/store';

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}