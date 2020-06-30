import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ title, index, isActive, tabChange }) => (
  <button
    className="tabs__button"
    type="button"
    onClick={() => tabChange(index)}
  >
    {title}
  </button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  tabChange: PropTypes.func.isRequired,
};
