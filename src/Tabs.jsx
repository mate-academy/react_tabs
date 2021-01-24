import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onTabSelected }) => (
  <div>
    {tabs.map(tab => (
      <button
        className="button"
        type="button"
        key={tab.id}
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
