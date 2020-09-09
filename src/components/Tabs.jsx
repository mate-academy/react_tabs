import React from 'react';

import PropTypes from 'prop-types';

import Tab from './Tab';

import './Tabs.scss';

const Tabs = ({ tabs, changeTabIndex, activeIndex }) => (
  <>
    <div className="tabBox">
      {tabs.map((tab, index) => (
        <button
          type="button"
          className={`tab ${(index === activeIndex) && 'chosenButton'}`}
          key={tab.title}
          onClick={() => changeTabIndex(index)}
        >
          <Tab {...tab} />
        </button>
      ))}
    </div>
    <div className="horizontalLine" />
    <div
      className={`bodyContent bodyColor${activeIndex + 1}`}
    >
      {tabs[activeIndex].content}
    </div>
  </>
);

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  changeTabIndex: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
};
