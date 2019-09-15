import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from 'scenes/Home';
import Experience from 'scenes/Experience';
import Portfolio from 'scenes/Portfolio';

import PageNotFound from 'components/404';
import Navigation from 'components/Navbar';
import Footer from 'components/Footer';

import ROUTES from 'routes';

import 'utils/navbar';
import 'utils/smoothScroll';

const App = () => (
  <div className="App">
    <header id="navigation" role="navigation">
      <Navigation key={window.location} />
    </header>
    <Main />
    <Footer id="footer" role="contentinfo" />
  </div>
);

// Main react-router
const Main = () => (
  <main id="top">
    <Switch>
      <Route exact path={ROUTES.home} component={Home} />
      <Route path={ROUTES.experience} component={Experience} />
      <Route path={ROUTES.portfolio} component={Portfolio} />
      <Route path={ROUTES.error} component={PageNotFound} />
      <Redirect to={ROUTES.error} />
    </Switch>
  </main>
);

export default App;
