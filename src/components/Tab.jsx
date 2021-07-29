import React from 'react';
import PropTypes from 'prop-types';

export const Tab = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => (
  <>
    <ul className="App__tabs">
      {tabs.map(tab => (
        <li key={tab.id}>
          <button
            type="button"
            className="button is-primary"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>

        </li>
      ))}
    </ul>
    <p>
      {tabs.find(tab => tab.id === selectedTabId).content}
    </p>
  </>
);

Tab.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
