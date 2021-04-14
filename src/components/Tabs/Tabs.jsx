import React from 'react';
import PropTypes from 'prop-types'

import './tabs.scss';


export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabs__list-item"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tabs__list-content">
        {tabs.find(tab => tab.id === selectedTabId).content}
      </div>
    </div>
  )
)

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })).isRequired,
    selectedTabId: PropTypes.string.isRequired,
    onTabSelected: PropTypes.func.isRequired,
};