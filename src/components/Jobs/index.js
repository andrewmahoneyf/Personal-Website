import React from 'react';
import PropTypes from 'prop-types';

import { POSITIONS } from 'assets';

export const Job = ({ company, date, position, url, image, desc }) => (
  <div className="job col-md-6 col-lg-4">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img className="rounded-circle box-shadow" src={image} alt={`${company} Logo`} width="140" height="140" />
    </a>
    <h2>{company}</h2>
    <p className="lead mb-0">{position}</p>
    <p>
      <em className="text-muted mb-2">{date}</em>
    </p>

    <p>{desc}</p>
    <p>
      <a className="btn btn-secondary box-shadow" href={url} role="button" target="_blank" rel="noopener noreferrer">
        View site &raquo;
      </a>
    </p>
  </div>
);

Job.propTypes = {
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

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
