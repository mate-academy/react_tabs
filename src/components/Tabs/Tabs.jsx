import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div className="App__buttons tab">
    {tabs.map(tab => (
      <button
        className="tab__button"
        type="button"
        key={tab.id}
        value={tab}
        onClick={() => (
          selectedTab !== tab
            ? onTabSelected(tab)
            : tab
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
  onTabSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
