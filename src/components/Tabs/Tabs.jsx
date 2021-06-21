import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <div>
    {tabs.map(tab => (
      <button
        type="button"
        key={tab.id}
        className={selectedTabId === tab.id && 'tab-active'}
        onClick={() => onTabSelected(tab.id)}
      >
        {tab.title}
      </button>
    ))
    }
    <div>
      {tabs.find(tab => tab.id === selectedTabId).content}
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
