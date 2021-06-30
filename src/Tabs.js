import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <>
    {tabs.map(tab => (
      <>
        <div
          role="button"
          onClick={() => onTabSelected(tab.id)}
          onKeyDown={() => onTabSelected(tab.id)}
          className={`link ${selectedTabId === tab.id
            ? 'selected'
            : ''}`}
          tabIndex={0}
        >
          {tab.title}
        </div>
        <div>{selectedTabId === tab.id ? tab.content : null}</div>
      </>
    ))}
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
