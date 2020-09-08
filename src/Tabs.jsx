import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <div className="tabs">
    {tabs.map((tab, index) => (
      <button
        className="tabs__buttons"
        type="button"
        key={tab.title}
        onClick={() => (
          onTabSelected(index))}
      >
        {tab.title}
      </button>
    ))}
    <p className="tabs__active">
      {tabs[activeTabId].content}
    </p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string.isRequired,
    ).isRequired,
  ).isRequired,
  activeTabId: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tabs;
