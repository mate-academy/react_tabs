import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ appTabs, onTabSelected, selectedTabId }) => (
  <div className="card-section">
    {appTabs.map(tab => (
      <button
        type="button"
        key={tab.id}
        onClick={() => onTabSelected(tab)}
        className={`${(selectedTabId === tab.id)
           && 'is-success'}  button is-light`}
      >
        {tab.title}
      </button>
    ))}
  </div>
);

Tabs.propTypes = {
  appTabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTabId: PropTypes.string.isRequired,
};
