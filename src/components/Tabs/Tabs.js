import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';
import Tab from '../Tab/Tab';

const Tabs = ({
  tabs, tabIndex, onTabSelected, activeClass,
}) => (
  <div className="tabs">
    {
      tabs.map((tab, i) => (
        <Tab
          key={tab.title}
          className="tabs__tab"
          onTabSelected={onTabSelected}
          tab={tab}
          i={i}
          activeClass={tabIndex === i ? activeClass : ''}
        />
      ))
    }
    <div className="tabs__content">
      {tabs[tabIndex].content}
    </div>
  </div>
);

const shape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(shape).isRequired,
  tabIndex: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  activeClass: PropTypes.string.isRequired,
};

export default Tabs;
