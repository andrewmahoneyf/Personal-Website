import React from 'react';

import { IMAGES } from 'assets';

export default () => (
  <div className="row">
    <div className="col-md-7">
      <h1>Interests &amp; Activities:</h1>
      <p className="lead">
        Andrew&apos;s passions include everything from blockchain technology to traveling. In his free time, he enjoys
        analyzing the stock market, fishing, watching football, and snowboarding on the weekends. With a profound
        interest in finances and trading, he spent 2017 interning for a day trader who mentored him through investments.
        To this day, he actively invests in various stocks and cryptocurrencies throughout the year for continued
        practice with portfolio management. Andrew&apos;s interest in blockchain was sparked after he started building
        GPU mining rig&apos;s with 1070 Ti&apos;s in 2017. He has since moved on to delegating crypto through Proof of
        Stake chains for various projects.
      </p>
    </div>
    <div className="col-md-5">
      <img className="img-fluid mx-auto my-auto box-shadow" src={IMAGES.beach} alt="Generic placeholder" />
    </div>
  </div>
);
