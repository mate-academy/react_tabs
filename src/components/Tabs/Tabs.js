import React from 'react';
import PropTypes from 'prop-types';
import './tabs.css';

export const Tabs = ({ tabs, onTabSelected, selectedTabIndex }) => (
  <div className="tab-list">

    {tabs.map((tab, i) => (
      <div>
        <div
          role="tab"
          tabIndex="0"
          className={`tab-title${selectedTabIndex === i ? ' chosen' : ''}`}
          key={tab.title}
          onClick={() => onTabSelected(i)}
          onKeyDown={() => onTabSelected(i)}
        >
          {tab.title}
        </div>
        {selectedTabIndex === i && <p className="text">{tab.content}</p>}
      </div>
    ))}

  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTabIndex: PropTypes.number.isRequired,
};
