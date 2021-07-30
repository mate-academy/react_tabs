import React from 'react';
import './Tab.css';

import PropTypes from 'prop-types';

export const Tab = ({ tabs, selectedTabId, onTabSelected }) => (
  <div className="tab">
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

Tab.propTypes = {
  tabs: PropTypes.arrayOf({}).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
