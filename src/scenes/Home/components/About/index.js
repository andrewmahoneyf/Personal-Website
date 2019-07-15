import React from 'react';

import { IMAGES, FILES } from 'constants/assets';
import { LINKS } from 'constants/routes';

const About = () => (
  <section id="about">
    <div className="container pt-md-5">
      <Education />
      <hr className="featurette-divider" />
      <Work />
      <hr className="featurette-divider" />
      <Interests />
      <div className="row pb-5 youtubeVids">
        <iframe width="475" height="315" src="https://www.youtube.com/embed/-E5NxtIogKM" frameBorder="0" allowFullScreen title="Best of Office" className="d-none d-md-block box-shadow" />
        <iframe width="475" height="315" src="https://www.youtube.com/embed/Xnk4seEHmgw" frameBorder="0" allowFullScreen title="Jim's Pranks" className="box-shadow" />
      </div>
    </div>
  </section>
);

const Education = () => (
  <div className="row featurette pt-4">
    <div className="col-md-7">
      <p className="float-left pb-2">
        <a href={LINKS.linkedin} className="btn btn-secondary mr-2 ml-3 ml-md-1 box-shadow" target="_blank" rel="noopener noreferrer">
          View LinkedIn
        </a>
        <a href={FILES.resume} className="btn btn-primary mr-2 box-shadow" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
        <a href={LINKS.github} className="btn btn-secondary box-shadow" id="hide" target="_blank" rel="noopener noreferrer">
          View GitHub
        </a>
      </p>
      <h2 className="featurette-heading clear mp-4">
        Education: <span className="text-muted">Go Dawgs</span>
      </h2>
      <p className="lead">
        Andrew is a University of Washington Undergraduate studying Information Systems at the Foster School of Business and minoring in Informatics. His web development knowledge covers HTML5, CSS3, JavaScript, PHP, and implementation with
        React, Node.js and several other frameworks and libraries. Andrew also received the Grow with Google Developer Scholarship where he completed a course in Android development through Udacity. He has several technical courses planned
        for the remainder of his degree and continues to learn other programming languages in his free time.
      </p>
    </div>
    <div className="col-md-5 grid">
      <img className="featurette-image img-fluid mx-auto my-auto box-shadow" src={IMAGES.portrait} alt="Generic placeholder" />
    </div>
  </div>
);

const Work = () => (
  <div className="row featurette">
    <div className="col-md-7 order-md-2">
      <h2 className="featurette-heading">Work Experience:</h2>
      <p className="lead">
        Besides being a full-time student, Andrew runs two companies and has consistently worked internships throughout his education. Currently, Andrew is a software development intern at Liberty Mutual in Boston, MA. His work has been
        highly valuable in providing both technical and management experience in multiple industries as well as international engagement.
      </p>
      <p className="lead">
        Andrew&apos;s passion for technology led to the creation of his two companies; Dubdev, a web and app development company, and Coinglomerate LLC, a data-driven tech startup. After being inspired by building his first Linux powered
        mining computer (pictured in the photo), Andrew co-founded Coinglomerate with minds he met at the UW Blockchain Society. Andrew provides his expertise in the industry, hardware, Linux, and scripting to offer software solutions for
        mining and build optimized computers.
      </p>
      <p className="lead">
        Andrew is always looking for new opportunities to expand his skill set and further his expertise in web development. He accepted a software development internship in Boston with Liberty Mutual for the summer, and will continue his
        work for the Department of Statistics. His work as the statistics webmaster includes constant site updates and technical support for the entire department. Previously, he helped transfer their old, hard-coded website to Drupal for
        easier management. This past year at SteppIR, he was a product manager helping the company restructure their business and product line. Andrew spent the past summer interning for two companies in São Paulo, Brazil; gaining valuable
        experience and skills with Sidera Consult and a tech startup called Altalova. Through his coursework, Andrew was able to actively control Sidera&apos;s WordPress account and create a price simulator for Altalova using JavaScript,
        HTML5, and CSS. Prior to his trip to Brazil, he interned for a private investor in Seattle as well as worked full-time as a supervisor for a valet company while continuing his education.
      </p>
    </div>
    <div className="col-md-5 order-md-1 grid">
      <div className="my-auto">
        <img className="featurette-image img-fluid mx-auto box-shadow" src={IMAGES.office} alt="Generic placeholder" />
        <img className="featurette-image img-fluid mx-auto mt-1 box-shadow" src={IMAGES.rig} alt="Generic placeholder" />
        <img className="featurette-image img-fluid mx-auto mt-3 box-shadow" src={IMAGES.office2} alt="Generic placeholder" />
      </div>
    </div>
  </div>
);

const Interests = () => (
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading">Interests &amp; Activities:</h2>
      <p className="lead">
        Andrew&apos;s passions include everything from cryptocurrency mining to traveling. In his free time, he enjoys analyzing the stock market, boxing for the University of Washington, watching football, and snowboarding on the weekends.
        With a profound interest in the stock market, he spent 2017 interning for a stock trader who mentored him through investments. To this day, he actively invests in various stocks and cryptocurrencies throughout the year for continued
        practice with portfolio management. Andrew started building GPU mining rig&apos;s in 2017 and continues to manage his personal portfolio, diversifying his mining efforts in Zcash, Ethereum, and various other altcoins. In high
        school, he played football, baseball, and ran track. He also volunteered to teach young children English in Spain and coached football at a camp in Washington for 4 years.
      </p>
    </div>
    <div className="col-md-5 grid">
      <img className="featurette-image img-fluid mx-auto my-auto box-shadow" src={IMAGES.beach} alt="Generic placeholder" />
    </div>
  </div>
);

export default About;
