import React from 'react';
import PropTypes from 'prop-types';

export function Tabs({ tabs, onTabSelected }) {
  return (
    <div>
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          onClick={
            () => onTabSelected(tab.id)
          }
        >
          {tab.title}
        </button>
      ))
      }
    </div>
  );
}

Tabs.propTypes = {
  onTabSelected: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
