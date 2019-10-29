import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ title, index, onTabSelected }) => (
  <button
    type="button"
    onClick={() => onTabSelected(index)}
  >
    {title}
  </button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tab;
