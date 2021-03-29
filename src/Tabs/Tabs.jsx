import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <ul className="list">
    {tabs.map(tab => (
      <li
        key={tab.id}
        className="list__item"
      >
        <button
          type="button"
          id={tab.id}
          onClick={onTabSelected}
          className={`list__button ${tab.id === selectedTabId
            ? 'list__button--active'
            : ''}`
          }
        >
          {tab.title}
        </button>
      </li>
    ))}
  </ul>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
