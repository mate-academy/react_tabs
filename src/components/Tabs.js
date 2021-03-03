import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, tabToSelect, currentTab }) => (
  tabs.map(tab => (
    <button
      key={tab.id}
      type="button"
      onClick={() => {
        if (currentTab !== tab.title) {
          tabToSelect(tab);
        }
      }}
    >
      {tab.title}
    </button>
  ))
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
  tabToSelect: PropTypes.func.isRequired,
  currentTab: PropTypes.string.isRequired,
};
