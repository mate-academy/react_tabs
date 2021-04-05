import React from 'react';
import './Tabs.css';

export const Tabs = ({ tabs, currentIndex, onTabSelected }) => (
  <>
    <div>
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          type="button"
          className={index === currentIndex ? 'button button__selected' : 'button'}
          onClick={() => onTabSelected(index)}
        >
          {tab.title}
        </button>
      ))}
    </div>

    <div className="tabs__content">
      {tabs[currentIndex].content}
    </div>
  </>
);
