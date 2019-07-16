import React from 'react';

import { POSITIONS } from 'constants/positions';
import Job from './components/Job';

export default () => (
  <div className="row pt-0">
    {POSITIONS.map(job => (
      <Job
        key={job.company}
        company={job.company}
        date={job.date}
        position={job.position}
        url={job.url}
        image={job.image}
        desc={job.desc}
      />
    ))}
  </div>
);
