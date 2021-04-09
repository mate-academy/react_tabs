import React from 'react';
import PropTypes from 'prop-types';
import './tabs.css';

export const Tabs = ({
  newTabs,
  selectedTabId,
  onTabSelected,
}) => (
  <div className="tabs">
    <ul className="tabs__list">
      {
        newTabs.map(tab => (
          <li
            key={tab.id}
            className="tabs__item"
          >
            <button
              type="button"
              className="tabs__button"
              onClick={() => onTabSelected(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))
      }
    </ul>
    <div className="tabs__content">
      {
        newTabs.find(tab => tab.id === selectedTabId).content
      }
    </div>
  </div>
);

Tabs.propTypes = {
  newTabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
