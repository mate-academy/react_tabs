import React from 'react';
import './Tab.css';

const Tab = ({ activeTab, title, index, onTabSelected }) => (
  <button
    type="button"
    onClick={() => onTabSelected(index)}
    className={
      activeTab === index
        ? 'button btn-active'
        : 'button'
    }
  >
    {title}
  </button>
);

export default Tab;
