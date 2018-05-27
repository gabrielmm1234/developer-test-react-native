import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { store as reducers } from './src/redux/store';
const store = createStore(reducers);
import { Routes } from './src/settings/Routes/routes';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}