import React from 'react';
import PropTypes from 'prop-types';

export const TabButton = ({ tab, onTabSelected }) => (
  <button
    key={tab.title}
    className="tablinks"
    type="button"
    onClick={() => onTabSelected(tab.content)}
  >
    {tab.title}
  </button>
);

TabButton.propTypes = {
  tab: (PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
