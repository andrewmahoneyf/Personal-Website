import React from 'react';
import { Link } from 'react-router-dom';

import { IMAGES, FILES } from 'constants/assets';
import { ROUTES, LINKS } from 'constants/routes';

const Carousel = () => (
  <section id="top" className="box-shadow">
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active" />
        <li data-target="#myCarousel" data-slide-to="1" />
        <li data-target="#myCarousel" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="first-slide" src={IMAGES.carousel1} alt="First slide" />
          <div className="container">
            <div className="carousel-caption d-md-block text-right slide1">
              <h1>ANDREW MAHONEY-FERNANDES</h1>
              <p className="dnone">
                <i>University of Washington | Michael G. Foster School of Business 2019</i>
              </p>
              <p>
                <a className="btn btn-lg btn-primary mr-2 box-shadow" href={FILES.resume} role="button" target="_blank" rel="noopener noreferrer">
                  Download Resume
                </a>
                <a href={LINKS.linkedin} className="btn btn-lg btn-secondary box-shadow" target="_blank" rel="noopener noreferrer">
                  View LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="second-slide" src={IMAGES.carousel2} alt="Second slide" />
          <div className="container">
            <div className="carousel-caption d-md-block slide2">
              <h1>Aspiring Software Developer</h1>
              <p>A business-minded individual with a passion for technology.</p>
              <p>
                <a className="btn btn-lg btn-primary box-shadow" href={ROUTES.about} role="button">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img className="third-slide" src={IMAGES.carousel3} alt="Third slide" />
          <div className="container">
            <div className="carousel-caption d-md-block text-left slide3">
              <h1>Cumulative Programming Experience:</h1>
              <p>Java, JavaScript, SQL, C#, PHP, HTML5, CSS3, Android, BASH, React, Git, and more to come!</p>
              <p>
                <Link className="btn btn-lg btn-primary box-shadow" to={ROUTES.portfolio} role="button">
                  Check out Andrew&apos;s Portfolio
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" data-target="#myCarousel" role="button" data-slide-to="prev" href="/">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" data-target="#myCarousel" role="button" data-slide="next" href="/">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </section>
);

export default Carousel;
