import React from 'react';
import propTypes from 'prop-types';

export const Tab = ({ tab, onSelect, isActive }) => (
  <button
    className={
      `button ${isActive ? 'active' : ''}`
    }
    type="button"
    key={tab.index}
    onClick={() => onSelect(tab.index)}
  >
    {tab.title}
  </button>
);

Tab.propTypes = {
  tab: propTypes.arrayOf.isRequired,
  onSelect: propTypes.func.isRequired,
  index: propTypes.number.isRequired,
  isActive: propTypes.bool.isRequired,
};
