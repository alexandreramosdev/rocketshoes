import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/Reactotron';

import Header from './components/Header';
import GlobalStyles from './styles/global';
import history from './services/history';

import store from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
