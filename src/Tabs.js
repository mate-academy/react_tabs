/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, id, onTabSelected }) => (
  <div className="tabs-container">
    <ul className="tabs">
      {tabs.map((tabItem, index) => (
        <li
          key={Date.now() * Math.random()}
          onClick={() => onTabSelected(index)}
          className={
            index === id
              ? 'tab-item tab-item--selected'
              : 'tab-item'
          }
        >
          {tabItem.title}
        </li>
      ))}
    </ul>
    <div className="tab-content">{tabs[id].content}</div>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};

export default Tabs;
