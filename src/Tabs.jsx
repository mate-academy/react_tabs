import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <div className="tabs">
    {tabs.map(tab => (
      <div key={tab.id}>
        <button
          type="button"
          onClick={() => {
            onTabSelected(tab.id);
          }}
        >
          {tab.title}
        </button>
      </div>
    ))}
    <div>
      {tabs.find(tab => tab.id === selectedTabId).content}
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf({}).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
