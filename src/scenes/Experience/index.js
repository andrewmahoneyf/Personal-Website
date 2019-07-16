import React from 'react';

import Header from 'components/Header';
import Jobs from 'components/Jobs';

import { FILES } from 'constants/assets';
import { LINKS } from 'constants/routes';

export default () => (
  <main className="experience">
    <Header
      headline="Andrew's Work Experience"
      subheading="Andrew prides himself on his work experiences and a love for what he does. This page can be used to look into
            his past and current companies and will be updated as his career advances!"
      primaryBtn="Resume"
      primaryURL={FILES.resume}
      secondaryBtn="View LinkedIn"
      secondaryURL={LINKS.linkedin}
    />
    <section className="container-fluid animated slideInUp p-5">
      <Jobs />
    </section>
  </main>
);
