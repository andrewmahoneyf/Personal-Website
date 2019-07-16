import React from 'react';

import { IMAGES, FILES } from 'constants/assets';
import { LINKS } from 'constants/routes';

export default () => (
  <div className="row featurette pt-4">
    <div className="col-md-7">
      <p className="float-left pb-2">
        <a
          href={LINKS.linkedin}
          className="btn btn-secondary mr-2 ml-3 ml-md-1 box-shadow"
          target="_blank"
          rel="noopener noreferrer"
        >
          View LinkedIn
        </a>
        <a href={FILES.resume} className="btn btn-primary mr-2 box-shadow" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
        <a
          href={LINKS.github}
          className="btn btn-secondary box-shadow"
          id="hide"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub
        </a>
      </p>
      <h2 className="featurette-heading clear mp-4">
        Education: <span className="text-muted">Go Dawgs</span>
      </h2>
      <p className="lead">
        Andrew graduated from the University of Washington with an undergraduate degree in Information Systems at the
        Foster School of Business. His passion for programming took off after taking his first CSE class at UW which led
        him to minor in Informatics. Andrew focused his efforts on learning new languages through online resources to
        gain professional level skills early on. Among online courses completed, Andrew received the Grow with Google
        Developer Scholarship for courses through Udacity.
      </p>
    </div>
    <div className="col-md-5 grid">
      <img
        className="featurette-image img-fluid mx-auto my-auto box-shadow"
        src={IMAGES.portrait}
        alt="Generic placeholder"
      />
    </div>
  </div>
);
