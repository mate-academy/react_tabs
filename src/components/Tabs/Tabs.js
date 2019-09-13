import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab/Tab';

import './Tabs.css';

const Tabs = ({
  tabs,
  currentTab,
  handleClick,
}) => (
  <div className="tabs__wrapper">
    <div className="tabs">
      {tabs.map((tab, index) => (
        <Tab
          tab={tab}
          handleClick={handleClick}
          index={index}
          currentTab={currentTab}
        />
      ))}
    </div>
    <div className="tabs__content">
      {tabs[currentTab].content}
    </div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentTab: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Tabs;
