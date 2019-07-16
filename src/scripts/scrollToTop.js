import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ScrollToTop.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default withRouter(ScrollToTop);
