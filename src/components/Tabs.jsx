import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onSelect }) => (
  <div>
    {tabs.map(tab => (
      <button
        type="button"
        key={tab.id}
        onClick={() => onSelect(tab.id)}
      >
        {tab.title}
      </button>
    ))}

    <article>{tabs.find(tab => tab.id === selectedTabId).content}</article>
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

  selectedTabId: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
