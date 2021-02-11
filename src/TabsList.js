import React from 'react';
import PropTypes from 'prop-types';

export const TabsList = ({ tabs, onTabSelected, selectedTab }) => (

  <div className="tabs">
    {tabs.map(tab => (
      <button
        key={tab.id}
        type="button"
        className={tab.id === selectedTab ? 'selected' : 'tab'}
        onClick={() => onTabSelected(tab.id)}
      >
        {tab.title}
      </button>
    ))}
  </div>

);

TabsList.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};
