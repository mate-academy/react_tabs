import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, handleButton, active }) => (
  <ul className="tabs">
    {tabs.map(tab => (
      <li
        key={tab.title}
        className={active === tab.index
          ? 'tabs__item--active'
          : 'tabs__item'}
      >
        <button
          type="button"
          className="clickButton"
          onClick={() => handleButton(tab.index)}
        >
          {tab.title}
        </button>
      </li>
    ))}
  </ul>
);

Tabs.propTypes = {
  handleButton: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
