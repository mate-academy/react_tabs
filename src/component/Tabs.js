import React from 'react';
import propTypes from 'prop-types';

const Tabs = ({ tabs, activeTab, selectedTab }) => (

  <>
    <div className="tabs">
      {
        tabs.map((tab, index) => (
          <button
            type="button"
            className="tabs__button"
            onClick={() => selectedTab(index)}
          >
            {tab.title}
          </button>
        ))
      }
    </div>
    <div className="tabs__content">
      {tabs[activeTab].content}
    </div>
  </>

);

Tabs.propTypes = {
  tabs: propTypes.arrayOf.isRequired,
  selectedTab: propTypes.func.isRequired,
  activeTab: propTypes.number.isRequired,
};

export default Tabs;
