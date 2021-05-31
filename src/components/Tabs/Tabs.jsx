import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onTabSelect, selectedTab }) => (
  <div>
    <ul>
      {tabs.map(tab => (
        <button
          className={tab.id === selectedTab.id ? 'active' : ''}
          type="button"
          onClick={() => (
            onTabSelect(tab)
          )}
        >
          {tab.title}
        </button>
      ))}
    </ul>
    <p>{selectedTab.content}</p>
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
  onTabSelect: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};
