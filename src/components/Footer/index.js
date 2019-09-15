import React from 'react';
import Scroll from 'react-scroll';

import Grid from '@material-ui/core/Grid';

import { LINKS } from 'assets';
import ContactForm from '../ContactForm';

export default () => (
  <footer id="footer">
    <Grid container spacing={5} className="gridContainer bg-dark">
      <Grid container item xs={12} sm={6}>
        <Grid item xs={12} className="mb-4">
          <a href="#top" onClick={Scroll.animateScroll.scrollToTop()}>
            Back to top
          </a>
        </Grid>
        <Grid item xs={12} className="text-center">
          <h1>Contact Andrew</h1>
        </Grid>
        <Grid item xs={12} className="text-center">
          <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" />
          </a>
          <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" />
          </a>
          <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-facebook" />
          </a>
          <a href={LINKS.youtube} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-youtube" />
          </a>
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-instagram" />
          </a>
          <a href={LINKS.snapchat} target="_blank" rel="noopener noreferrer">
            <i className="fa fa-snapchat-ghost" />
          </a>
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={6}>
        <ContactForm />
      </Grid>
    </Grid>
  </footer>
);
