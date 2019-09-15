import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ROUTES from 'routes';

const Navbar = ({ location }) => {
  const hideHome = ['/experience', '/portfolio', '/404'].includes(location.pathname);
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top" data-toggle="collapse" data-target="#navbarCollapse">
      <Link className="navbar-brand pl-4" to={ROUTES.home}>
        AndrewMF
      </Link>
      <button
        className="navbar-toggler mr-4 float-right mt-2"
        type="button"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse pl-1" id="navbarCollapse">
        <ul className="navbar-nav mr-0 mr-md-auto">
          {hideHome && (
            <li className="nav-item">
              <Link className="nav-link" to={ROUTES.home}>
                HOME
              </Link>
            </li>
          )}
          <li className={`nav-item ${hideHome && 'd-none'}`}>
            <a className="nav-link" href={ROUTES.about}>
              ABOUT
            </a>
          </li>
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
};

Navbar.propTypes = {
  location: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withRouter(Navbar);
