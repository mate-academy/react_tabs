import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <>
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li
          className="nav-item"
          key={tab.id}
        >
          <button
            type="button"
            className="nav-link"
            aria-current="page"
            onClick={() => onTabSelected(tab.id)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    <div>
      {tabs.find(tab => selectedTabId === tab.id).content}
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
