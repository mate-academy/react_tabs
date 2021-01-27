import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onTabSelected }) => (
  <div>
    {tabs.map(tab => (
      <button
        key={tab.id}
        type="button"
        className="button"
        onClick={() => {
          onTabSelected(tab.id);
        }}
      >
        {tab.title}
      </button>
    ))
    }
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
