import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from 'scenes/Home';
import Experience from 'scenes/Experience';
import Portfolio from 'scenes/Portfolio';
import PageNotFound from 'scenes/PageNotFound';

import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

import 'scripts/navbar';
import 'scripts/smoothScroll';

const App = () => (
  <div className="App">
    <header id="navigation" role="navigation">
      <Navigation />
    </header>
    <Main />
    <Footer id="footer" role="contentinfo" />
  </div>
);

// Main react-router
const Main = () => (
  <main id="top">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/experience" component={Experience} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/404" component={PageNotFound} />
      <Redirect to="/404" />
    </Switch>
  </main>
);

export default App;
