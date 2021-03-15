import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

export const Tabs = ({ tabs, selectTabHandler, selectedTab }) => (
  <div>
    <ul className="tab-list">
      {tabs.map(el => (
        <button
          key={el.id}
          type="button"
          onClick={() => selectTabHandler(el.id)}
        >
          <li
            className={selectedTab === el.id
              ? 'tab-list-item tab-list-active'
              : 'tab-list-item'}
            key={el.id}
          >
            {el.title}
          </li>
        </button>
      ))}
    </ul>
    <p>{tabs.find(tab => tab.id === selectedTab).content}</p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};
