import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';

function Tabs({ tabs, tabsFunc, whatTab }) {
  return (
    <div className="tabs">
      {
        tabs.map(item => (
          <Tab
            key={item.title}
            title={item.title}
            tabFunc={tabsFunc}
            activeTab={whatTab}
          />
        ))
      }
    </div>
  );
}

Tabs.propTypes = {
  tabsFunc: PropTypes.func.isRequired,
  whatTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf.isRequired,
};

export default Tabs;
