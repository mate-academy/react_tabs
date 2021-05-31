import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  tabs.map(tab => (
    <button
      key={tab.id}
      type="button"
      className={selectedTabId === tab.id ? 'selected' : ''}
      onClick={() => {
        if (selectedTabId !== tab.id) {
          onTabSelected(tab.id);
        }
      }}
    >
      {tab.title}
    </button>
  ))
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
