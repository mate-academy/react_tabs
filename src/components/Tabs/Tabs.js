import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';

const Tabs = ({ tabs, tabsFunc, activeTabIndex }) => (
  <div className="tabs">
    {
      tabs.map(item => (
        <Tab
          key={item.title}
          title={item.title}
          tabFunc={tabsFunc}
          activeTab={activeTabIndex}
        />
      ))
    }
  </div>
);

Tabs.propTypes = {
  tabsFunc: PropTypes.func.isRequired,
  activeTabIndex: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.objectOf({
      title: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};

export default Tabs;
