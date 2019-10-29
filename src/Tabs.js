import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = ({ tabs, onTabSelected, activeTab }) => (
  <>
    <div>
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
    <div>
      {tabs[activeTab].content}
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default Tabs;
