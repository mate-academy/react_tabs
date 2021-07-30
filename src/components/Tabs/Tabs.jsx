import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({
  tabsList,
  selectedTabId,
  onTabSelected,
}) => (
  <div className="my-4">
    {tabsList.map(tab => (
      <button
        type="button"
        key={tab.id}
        onClick={() => onTabSelected(tab)}
        className={`button is-warning mx-4
          ${(selectedTabId === tab.id) && 'is-danger'}`
        }
      >
        {tab.title}
      </button>
    ))}
  </div>
);

Tabs.propTypes = {
  tabsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTabSelected: PropTypes.func.isRequired,
  selectedTabId: PropTypes.string.isRequired,
};
