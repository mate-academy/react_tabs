import React from 'react';
import TabUnique from '../tab/TabUnique';
import TabConent from '../tabContent/TabContent';

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
    <TabConent
      content={tabs[activeTab].content}
    />
  </>
);

export default Tabs;
