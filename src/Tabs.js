import React from 'react';
import propTypes from 'prop-types';
import './App.css';

const Tabs = ({ tabs, indexTab, onTabSelected }) => (

  <>
    <div className="tabs">
      {
        tabs.map((tab, index) => (
          <button
            type="button"
            className="tabs__button"
            onClick={() => onTabSelected(index)}
          >
            {tab.title}
          </button>
        ))
      }
    </div>
    <div className="tabs__content">
      {tabs[indexTab].content}
    </div>
  </>

);

Tabs.propTypes = {
  tabs: propTypes.arrayOf.isRequired,
  onTabSelected: propTypes.func.isRequired,
  indexTab: propTypes.number.isRequired,
};

export default Tabs;
