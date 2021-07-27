import React from 'react';
import PropTypes from 'prop-types';

export const Buttons = ({ tab, onTabSelected }) => (
  <button
    type="button"
    onClick={onTabSelected}
  >
    { tab.content }
  </button>
);

Buttons.propTypes = {
  tab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
