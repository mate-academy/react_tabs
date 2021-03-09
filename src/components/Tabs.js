import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => (
  <>
    <div className="nav_buttons">
      {tabs.map(tab => (
        <button
          onClick={() => onTabSelected(tab)}
          type="button"
          className={selectedTabId === tab.id && 'active'}
        >
          {tab.title}
        </button>
      ))}
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTabSelected: PropTypes.string.isRequired,
  selectedTabId: PropTypes.string.isRequired,
};
