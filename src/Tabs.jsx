import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, activeTabId, onClick }) => (
  <div className="tabs">
    {tabs.map((tab, i) => (
      <button
        className="tabs__buttons"
        type="button"
        key={tab.title}
        onClick={() => (
          onClick(i))}
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
  onClick: PropTypes.func.isRequired,
};

export default Tabs;
