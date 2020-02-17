import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ title, index, handler, isActive }) => (
  <button
    type="button"
    className={`tabs__button ${isActive ? 'tabs__button--active' : ''}`}
    onClick={() => {
      handler(index);
    }}
  >
    {title}
  </button>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
