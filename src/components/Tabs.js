import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => (
  <>
    {tabs.map(tab => (
      <li key={tab.id}>
        <button
          type="button"
          value={tab.id}
          onClick={(event) => {
            if (event.target.value === selectedTabId) {
              return;
            }

            onTabSelected(event.target.value);
          }}
        >
          {tab.title}
        </button>

      </li>
    ))}
  </>
);

Tabs.propTypes = {
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};
