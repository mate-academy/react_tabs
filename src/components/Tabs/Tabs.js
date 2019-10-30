import React from 'react';
import './Tabs.css';

const Tabs = ({ tabs, onTabSelected }) => (
  tabs.map((tab, index) => (
    <button
      key={tab.title}
      type="button"
      className="tab-button"
      onClick={() => onTabSelected(index)}
    >
      {tab.title}
    </button>
  ))
);

export default Tabs;
