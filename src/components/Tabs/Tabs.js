import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({
  tabs,
  onTabSelect,
  selectedTabId,
}) => (
  <div>
    {tabs.map(tab => (
      <button
        className={selectedTabId === tab.id ? 'active' : ''}
        type="button"
        onClick={() => onTabSelect(tab.id)}
      >
        {tab.title}
      </button>
    ))}
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onTabSelect: PropTypes.func.isRequired,
  selectedTabId: PropTypes.string.isRequired,
};
