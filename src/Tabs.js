import React from 'react';
import propTypes from 'prop-types';
import './tabs.css';


const Tabs = ({ tabs, onTabSelected, indexItem }) => {
  const addClasess = (indexTab) => {
    return (indexTab === indexItem)
      ? 'tabs__item tabs__item--active'
      : 'tabs__item';
  };

  return (
    <>
      <ul className="tabs">
        {
          tabs.map((tab, index) => (
            <li
              className={addClasess(index)}
              onClick={() => onTabSelected(index)}
              key={index}
            >
              {tab.title}
            </li>
          ))
        }
      </ul>
      <div className="tabs__content">
        {tabs[indexItem].content}
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: propTypes.arrayOf.isRequired,
  onTabSelected: propTypes.func.isRequired,
  indexItem: propTypes.number.isRequired,
};

export default Tabs;
