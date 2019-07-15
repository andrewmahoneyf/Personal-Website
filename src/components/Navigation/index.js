import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from 'constants/routes';

const Navigation = () => (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top transparent" data-toggle="collapse" data-target="#navbarCollapse">
    <Link className="navbar-brand pl-4" to={ROUTES.home}>
      AndrewMF
    </Link>
    <button className="navbar-toggler mr-4 float-right mt-2" type="button" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse pl-1" id="navbarCollapse">
      <ul className="navbar-nav mr-0 mr-md-auto">
        <HomeLink />
        <AboutLink />
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.experience}>
            EXPERIENCE
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.portfolio}>
            PORTFOLIO
          </Link>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li className="nav-item pr-md-4">
          <a className="nav-link" href={ROUTES.contact}>
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

const HomeLink = () => {
  if (window.location.href.includes('experience') || window.location.href.includes('portfolio') || window.location.href.includes('404')) {
    return (
      <li className="nav-item">
        <Link className="nav-link" to={ROUTES.home}>
          HOME
        </Link>
      </li>
    );
  }
  return '';
};

const AboutLink = () => {
  if (window.location.href.includes('experience') || window.location.href.includes('portfolio') || window.location.href.includes('404')) {
    return (
      <li className="nav-item d-none">
        <a className="nav-link" href={ROUTES.about}>
          ABOUT
        </a>
      </li>
    );
  }
  return (
    <li className="nav-item">
      <a className="nav-link" href={ROUTES.about}>
        ABOUT
      </a>
    </li>
  );
};

export default Navigation;
