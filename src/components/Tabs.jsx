import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onSelelect, selectedContent}) => (
  <div>
    {tabs.map(tab => (
      <button
        type="button"
        key={tab.id}
        onClick={() => onSelelect(tab)}
      >
        {tab.title}
      </button>
    ))}

      <p>
        {selectedContent}
      </p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSelelect: PropTypes.func.isRequired,
  selectedContent: PropTypes.string.isRequired,
};
