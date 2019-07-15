import React from 'react';

import Header from 'components/Header';
import Job from 'components/Job';

import { POSITIONS } from 'constants/positions';
import { FILES } from 'constants/assets';
import { LINKS } from 'constants/routes';

const Experience = () => (
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

const Jobs = () => (
  <div className="row pt-0">
    {POSITIONS.map(job => (
      <Job key={job.company} company={job.company} date={job.date} position={job.position} url={job.url} image={job.image} desc={job.desc} />
    ))}
  </div>
);

export default Experience;
export { Jobs };
