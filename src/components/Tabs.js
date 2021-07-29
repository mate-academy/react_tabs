import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ appTabs, onTabSelected, selectedTabId }) => (
  <>
    {appTabs.map(tab => (
      <button
        type="button"
        key={tab.id}
        onClick={() => {
          onTabSelected(tab);
        }}
        className={(selectedTabId === tab.id) && 'selected'}
      >
        {tab.title}
      </button>
    ))}
  </>
);

Tabs.propTypes = {
  appTabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTabId: PropTypes.string.isRequired,
};
