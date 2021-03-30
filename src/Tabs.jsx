import PropTypes from 'prop-types';
import React from 'react';
import './App.css';

export const Tabs = ({ tabs, selectedTab, onTabSelect }) => (
  <div>
    <ul className="block">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className="block__item"
        >
          <button
            type="button"
            onClick={() => onTabSelect(tab)}
            className={tab.id === selectedTab.id
              ? 'active'
              : 'block__button'
            }
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,

  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onTabSelect: PropTypes.func.isRequired,
};
