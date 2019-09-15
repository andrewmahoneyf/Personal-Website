import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';

import ScrollToTop from 'utils/scrollToTop';
import * as serviceWorker from 'utils/serviceWorker';

import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';
import 'styles/index.scss';

import App from './App';

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </Router>,
  document.getElementById('root')
);
serviceWorker.register();
