import React from 'react';
import Tab from '../Tab/Tab';

const Tabs = ({ tabs, onTabSelected, activeTab }) => (
  <div className="container">
    <div className="container__tabs">
      {tabs.map((tab, index) => (
        <Tab
          onTabSelected={onTabSelected}
          key={tab.title}
          index={index}
          activeTab={activeTab}
          title={tab.title}
        />
      ))}
    </div>

    <div className="text-container">
      {tabs[activeTab].content}
    </div>

  </div>
);

export default Tabs;
