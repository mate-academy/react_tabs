import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

const Tabs = ({ tabs, onTabSelected, selectedTab }) => (
  <ul className="tabs">
    {tabs.map((tab, index) => (
      <Tab
        key={index}
        tab={tab}
        id={index}
        onTabSelected={onTabSelected}
        selectedTab={selectedTab}
      />
    ))}
  </ul>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.number.isRequired,
};

export default Tabs;
