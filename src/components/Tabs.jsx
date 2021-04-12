import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, tabChanged }) => (
  <div>
    <ul>
      {tabs.map(tab => (
        <li key={tab.id}>
          <button
            type="button"
            onClick={() => tabChanged(tab)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
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
  tabChanged: PropTypes.func.isRequired,
};
