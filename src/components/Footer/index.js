import React from 'react';
import Scroll from 'react-scroll';

import { LINKS } from 'constants/routes';

const Footer = () => (
  <div>
    <footer id="footer" className="builder-bg padding-30px-tb xs-padding-30px-tb bg-dark">
      <div className="container-fluid pl-5 pr-5">
        <p className="float-right">
          <a href="#top" onClick={Scroll.animateScroll.scrollToTop()}>
            Back to top
          </a>
        </p>
        <p>
          <a href={LINKS.phone}>(425) 210-5809</a>
          <br />{' '}
          <a href={LINKS.gmail} target="_blank" rel="noopener noreferrer">
            andrew.mahoney.f@gmail.com
          </a>
          <br />{' '}
          <a href={LINKS.uw} target="_blank" rel="noopener noreferrer">
            {' '}
            drew102@uw.edu / u.washington.edu
          </a>
        </p>
        <div className="col-md-12 row">
          <div className="col-md-6 col-sm-4 pl-4 pl-md-1">
            <p>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" />
              </a>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github" />
              </a>
              <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-facebook" />
              </a>
              <a href={LINKS.youtub} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-youtube" />
              </a>
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-instagram" />
              </a>
              <a href={LINKS.snapchat} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-snapchat-ghost d-none d-md-inline-block" />
              </a>
            </p>
          </div>
          <div className="col-md-6 col-sm-8" />
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
