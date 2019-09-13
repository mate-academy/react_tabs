import React from 'react';

import PropTypes from 'prop-types';

const Tab = ({ children }) => (
  <div className="tab-content__wrapper">
    <p className="tab-content">{children}</p>
  </div>
);

Tab.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Tab;
