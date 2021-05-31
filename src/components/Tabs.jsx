import React from 'react';
import PropTypes, { shape } from 'prop-types';

export const Tabs = React.memo(({ onTabSelected, tabs }) => (
  <div>
    {tabs.map(tab => (
      <button
        key={tab.id}
        type="button"
        onClick={() => onTabSelected(tab.id)}
      >
        {tab.title}
      </button>
    ))}
  </div>
));

Tabs.propTypes = {
  onTabSelected: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
