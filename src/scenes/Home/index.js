import React from 'react';

import Carousel from './components/Carousel';
import About from './components/About';
import { Jobs } from '../Experience';

const hrStyle = {
  marginTop: '0',
  borderTop: '15px solid rgba(0,0,0,.1)',
};

const Home = () => (
  <main className="home">
    <Carousel />
    <section className="container-fluid nowrap pl-5 pr-5 pb-md-4">
      <Jobs />
      <hr style={hrStyle} />
    </section>
    <About />
  </main>
);

export default Home;
