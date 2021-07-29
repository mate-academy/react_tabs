import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <div>
    {tabs.map(tab => (
      <button
        type="button"
        onClick={() => onTabSelected(tab)}
      >
        {tab.title}
      </button>
    ))}
    <p>
      {tabs.find(tab => tab.id === selectedTabId).content}
    </p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
