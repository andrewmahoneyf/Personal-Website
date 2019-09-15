import React from 'react';

import Card from 'components/Card';
import Header from 'components/Header';

import { PROJECTS, LINKS } from 'assets';

export default () => (
  <main role="main" className="projects">
    <Header
      headline="Andrew's Portfolio"
      subheading="This collection of work showcases projects Andrew completed in class, at work, or in recreation. Check
                    back for continued updates as the year goes on and more projects are added to the portfolio."
      primaryBtn="View GitHub"
      primaryURL={LINKS.github}
      secondaryBtn="View LinkedIn"
      secondaryURL={LINKS.linkedin}
    />
    <div className="album animated slideInUp">
      {PROJECTS.map(project => (
        <Card key={project.url} url={project.url} image={project.image} desc={project.desc} />
      ))}
    </div>
  </main>
);
