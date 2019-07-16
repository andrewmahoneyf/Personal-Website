import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const { url, image, desc } = props;
  return (
    <div className="card">
      <a href={url} target="_blank" className="cardLink" rel="noopener noreferrer">
        <img
          data-src="holder.js/100px280/thumb"
          alt="100%x280"
          className="cardImg"
          src={image}
          data-holder-rendered="true"
        />
        <p className="card-text">{desc}</p>
      </a>
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Card;
