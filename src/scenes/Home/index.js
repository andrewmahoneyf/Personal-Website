import React from 'react';

import Divider from '@material-ui/core/Divider';

import Jobs from 'components/Jobs';
import Carousel from './components/Carousel';
import Education from './components/Education';
import Work from './components/Work';
import Interests from './components/Interests';

export default () => (
  <main className="home">
    <Carousel />
    <section id="jobs" className="container-fluid nowrap pl-5 pr-5 pb-md-4">
      <Jobs />
      <hr className="jobs-hr" />
    </section>
    <section id="about">
      <div className="container pt-md-5">
        <Education />
        <Divider />
        <Work />
        <Divider />
        <Interests />
        <div className="row pb-5 video">
          <iframe
            width="475"
            height="315"
            src="https://www.youtube.com/embed/M8KmqaJvgpE"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Best of Office"
            className="d-none d-md-block box-shadow"
          />
          <iframe
            width="475"
            height="315"
            src="https://www.youtube.com/embed/Xnk4seEHmgw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Jim's Pranks"
            className="box-shadow"
          />
        </div>
      </div>
    </section>
  </main>
);
