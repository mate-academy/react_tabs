import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

export const Tabs = ({ tabs, onTabSelected }) => (
  <ul className="tabs">
    {tabs.map(tab => (
      <li key={tab.id} className="tabs__list">
        <button
          type="button"
          className="button"
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      </li>
    ))}
  </ul>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
