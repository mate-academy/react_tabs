import React from 'react';
import './Tabs.css';

const Tabs = ({ tabs, clickHandler }) => tabs.map(
  tab => (
    <button
      onClick={() => clickHandler(tab.id)}
      type="button"
      key={tab.title}
      className="btn"
    >
      {tab.title}
    </button>
  ),
);

export default Tabs;
