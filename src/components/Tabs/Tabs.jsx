import React from 'react';
import './Tabs.css';

export const Tabs = ({ tabs, index, onTabSelected }) => (
  <>
    <div>
      {tabs.map((tab, i) => (
        <button
          key={tab.id}
          type="button"
          className={i === index ? 'button button__selected' : 'button'}
          onClick={() => onTabSelected(i)}
        >
          {tab.title}
        </button>
      ))}
    </div>

    <div className="tabs__content">
      {tabs[index].content}
    </div>
  </>
);
