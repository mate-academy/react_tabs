import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onTabSelected }) => (
  <div>
    {tabs.map(tab => (
      <button
        key={tab.title}
        type="button"
        className="Tabs__button"
        onClick={() => onTabSelected(tab.id)}
      >
        {tab.title}
      </button>
    ))}
  </div>
);

Tabs.propTypes = {
  onTabSelected: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
