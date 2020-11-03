import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ text }) => (
  <div>
    <h1>{text}</h1>
  </div>
);

Tab.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tab;
