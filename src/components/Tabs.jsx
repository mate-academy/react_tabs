import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
          >
            <button
              type="button"
              onClick={() => {
                onTabSelected(tab);
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <span>
        {selectedTab.content}
      </span>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
