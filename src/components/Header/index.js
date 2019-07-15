import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const { headline, subheading, primaryBtn, primaryURL, secondaryBtn, secondaryURL } = props;
  return (
    <section className="jumbotron text-center bg-dark">
      <div className="container animated fadeIn">
        <h1 className="jumbotron-heading text-white">{headline}</h1>
        <p className="lead text-muted">{subheading}</p>
        <p>
          <a href={primaryURL} className="btn btn-primary mr-5" target="_blank" rel="noopener noreferrer">
            {primaryBtn}
          </a>
          <a href={secondaryURL} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            {secondaryBtn}
          </a>
        </p>
      </div>
    </section>
  );
};

Header.propTypes = {
  headline: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  primaryBtn: PropTypes.string.isRequired,
  primaryURL: PropTypes.string.isRequired,
  secondaryBtn: PropTypes.string.isRequired,
  secondaryURL: PropTypes.string.isRequired,
};
export default Header;
