import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <div className="App__buttons tab">
    {tabs.map(tab => (
      <button
        className="tab__button"
        type="button"
        value={tab}
        onClick={() => (
          selectedTabId !== tab.id
            ? onTabSelected(tab)
            : tab.id
        )}
      >
        {tab.title}
      </button>
    ))}
    <div className="tab-underline" />
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
