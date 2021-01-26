import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onClick }) => (
  tabs.map(tab => (
    <button
      className="btn btn-primary"
      key={tab.id}
      type="button"
      onClick={() => {
        onClick(tab.id);
      }}
    >
      {tab.title}
    </button>
  ))
);

Tabs.propTypes = {
  onClick: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
