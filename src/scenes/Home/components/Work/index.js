import React from 'react';

import { IMAGES } from 'constants/assets';

export default () => (
  <div className="row featurette">
    <div className="col-md-7 order-md-2">
      <h2 className="featurette-heading">Work Experience:</h2>
      <p className="lead">
        Andrew prides himself on the vast level of experience he has been able to gain through his young and aspiring
        career. Besides being a full-time student, Andrew ran two companies and consistently interned throughout his
        education. This hard work led him to Activision where he now works as a Software Engineer. As a key member to
        Activision&apos;s Central Tech team in Sherman Oaks, Andrew provides support to several game studios such as
        Infinity Ward and Treyarch. His current role focuses on a React and Django software stack enabling live game
        operations and python script management for game developers.
      </p>
      <p className="lead">
        Andrew&apos;s passion for technology led to the creation of his two companies; Dubdev, a web and app development
        company, and Coinglomerate LLC, a data-driven tech startup. After being inspired by building his first Linux
        powered mining computer (pictured in the photo), Andrew co-founded Coinglomerate with minds he met at the UW
        Blockchain Society. Andrew provided his expertise in the industry, hardware, Linux, and scripting to offer
        software solutions for mining and build optimized computers.
      </p>
      <p className="lead">
        Andrew has broadened his programming skills throughout his career with a notably strong background in front-end
        development. He has led various projects and teams from beginning to end with his personal web development
        company, DubDev, as well as through several internships. Not only does he have proficiency with web programming
        languages, he has experience with various object-oriented languages such as Java, C#, and Python. That being
        said, Andrew still finds it hard to beat JavaScript and plans to continue his focus until blockchain takes him
        down another rabbit hole of learning.
      </p>
    </div>
    <div className="col-md-5 order-md-1 grid">
      <div className="my-auto">
        <img className="featurette-image img-fluid mx-auto box-shadow" src={IMAGES.office} alt="Generic placeholder" />
        <img
          className="featurette-image img-fluid mx-auto mt-1 box-shadow"
          src={IMAGES.rig}
          alt="Generic placeholder"
        />
        <img
          className="featurette-image img-fluid mx-auto mt-3 box-shadow"
          src={IMAGES.office2}
          alt="Generic placeholder"
        />
      </div>
    </div>
  </div>
);
