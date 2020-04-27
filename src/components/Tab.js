import React from 'react';
import PropTypes from 'prop-types';

export const Tab = ({ title, index, handler, isActive }) => (
  <button
    type="button"
    className={`tabs__btn ${isActive ? 'tabs__btn--active' : ''}`}
    onClick={() => {
      handler(index);
    }}
  >
    {title}
  </button>
);

export const tabTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

Tab.propTypes = tabTypes.isRequired;
