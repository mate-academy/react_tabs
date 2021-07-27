import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ tab, onTabSelected }) => (
  <button
    type="button"
    onClick={() => onTabSelected(tab.id)}
  >
    { tab.content }
  </button>
);

Button.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
