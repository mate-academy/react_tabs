import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => (
  <>
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          type="button"
          className="buttonTab"
          onClick={() => {
            onTabSelected(tab.id);
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <p className="content">
      {tabs.find(tab => tab.id === selectedTabId).content}
    </p>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTabId: PropTypes.string.isRequired,
};
