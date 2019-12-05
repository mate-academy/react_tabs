import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = ({ tabs, activeTab, handleChangeTab }) => (
  <div className="tabs-container">
    <ul className="tabs">
      {tabs.map((tabItem, index) => (
        <Tab
          key={tabItem.id}
          handleChangeTab={handleChangeTab}
          activeTab={activeTab}
          tab={tabItem}
          index={index}
        />
      ))}
    </ul>
    <section className="tab-content">
      {tabs[activeTab].content}
    </section>
  </div>
);

Tabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
  handleChangeTab: PropTypes.func.isRequired,
  tabs: PropTypes.shape().isRequired,
};

export default Tabs;
