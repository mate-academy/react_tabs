import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onSelelect, selectedId }) => (
  <>
    {tabs.map(tab => (
      <button
        type="button"
        key={tab.id}
        onClick={() => onSelelect(tab.id, tab.title)}
      >
        {tab.title}
      </button>
    ))}

    {tabs.map((tab) => {
      if (tab.id === selectedId) {
        return (
          <p>{tab.content}</p>
        );
      }

      return false;
    })}
  </>
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
  selectedId: PropTypes.string.isRequired,
};
