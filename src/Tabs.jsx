import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onSelectedTab }) => (
  <div>
    <ul>
      {tabs.map(tab => 
      <li key={tab.id}>
        <button
          type="button"
          onClick={() => {onSelectedTab(tab.id)}}
        >
          {tab.title}
        </button>
      </li>)}
    </ul>
    <p>{tabs.find(tab => selectedTabId === tab.id).content}</p>
  </div>
)

Tabs.propTypes = {
  onSelectedTab: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
  selectedTabId: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
};