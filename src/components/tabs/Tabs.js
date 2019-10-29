import React from 'react';
import TabUnique from '../tab/TabUnique';

const Tabs = ({ tabs, onTabSelected, activeTab }) => (
  <>
    <div className="ui pointing menu">
      {tabs.map((tab, index) => (
        <TabUnique
          key={tab.title}
          tab={tab}
          onTabSelected={onTabSelected}
          index={index}
          activeTab={activeTab}
        />
      ))}
    </div>
    <div className="tab-content">
      {tabs[activeTab].content}
    </div>
  </>
);

export default Tabs;
