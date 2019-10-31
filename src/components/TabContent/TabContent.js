import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({ text }) => (
  <div className="tab-content">
    {text}
  </div>
);

TabContent.defaultProps = {
  text: '',
};

TabContent.propTypes = {
  text: PropTypes.string,
};

export default TabContent;
