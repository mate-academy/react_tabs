import React from 'react';
import './Tabs.css';

const Tabs = ({ tabs, clickTab, indexItem }) => {
  const className = i => (indexItem === i ? 'active item' : 'item');

  return (
    <>
      <div className="ui attached tabular menu">
        {tabs.map((tab, i) => (
          <a
            onClick={() => clickTab(i)}
            className={className(i)}
            key={i}
          >
            {tab.title}
          </a>
        ))}
      </div>
      <div className="ui bottom attached segment active tab">
        {tabs[indexItem].content}
      </div>
    </>
  );
};

export default Tabs;
