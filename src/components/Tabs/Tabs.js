import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onClick }) => (
  <div className="Tabs">
    {tabs.map(tab => (
      <button
        className="Tabs__button"
        type="button"
        key={tab.id}
        onClick={() => {
          onClick(tab.id);
        }}
      >
        {tab.title}
      </button>
    ))}
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
