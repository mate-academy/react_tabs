import React from 'react';
import PropTypes from 'prop-types';
import '../App.scss';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <nav>
    <div className="nav nav-tabs">
      {tabs.map(tab => (
        <button
          type="button"
          className={
            `nav-link ${
              tab.id === selectedTabId ? 'active' : ''
            }`
          }
          onClick={(event) => {
            event.preventDefault();
            onTabSelected(tab);
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
  </nav>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
