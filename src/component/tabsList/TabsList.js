import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../tab/Tab';
import Content from '../content/Content';

const Tabs = ({ tabs, onTabSelected, activeTab }) => (
  <>
    <div>
      {tabs.map((tab, index) => (
        <Tab
          key={tab.title}
          tab={tab}
          onTabSelected={() => onTabSelected(index)}
          activeTab={activeTab}
        />
      ))}
    </div>
    <Content content={tabs} activeTab={activeTab} />
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  activeTab: PropTypes.number.isRequired,
};

export default Tabs;
