import React from 'react';
import Tab from '../Tab/Tab';
import './Tabs.css';
import { TabsPropTypes } from '../../proptypes/proptypes';

const Tabs = ({ tabs, onTabSelected, activeTab }) => (
  <>
    <div className="ui top attached tabular menu">
      {tabs.map((tab, index) => (
        <Tab
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

Tabs.propTypes = TabsPropTypes;

export default Tabs;
