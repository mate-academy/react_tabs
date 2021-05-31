import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onTabSelect, selectedTabId }) => (
  <>
    {
      tabs.map(tab => (
        <button
          className={`link ${selectedTabId === tab.id ? 'active' : ''}`}
          key={tab.id}
          type="button"
          onClick={() => onTabSelect(tab)}
        >
          {tab.title}
        </button>
      ))
    }
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTabSelect: PropTypes.func.isRequired,
  selectedTabId: PropTypes.string.isRequired,
};
