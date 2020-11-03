import React from 'react';
import propTypes from 'prop-types';

export const Title = ({ tab, onSelect, index, indexState }) => (
  <button
    className={
      `button ${indexState === tab.index ? 'active' : ''}`
    }
    type="button"
    key={index}
    onClick={() => onSelect(tab.index)}
  >
    {tab.title}
  </button>
);

Title.propTypes = {
  tab: propTypes.arrayOf.isRequired,
  onSelect: propTypes.func.isRequired,
  index: propTypes.number.isRequired,
  indexState: propTypes.number.isRequired,
};
