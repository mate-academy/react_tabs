import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ text }) => (
  <div className="bg-light text-dark w-50">
    <h1>{text}</h1>
  </div>
);

Tab.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Tab;
