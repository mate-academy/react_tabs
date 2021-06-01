import React from 'react';
import PropTypes, { shape } from 'prop-types';

export const Tabs = ({ onTabSelected, tabs }) => (
  tabs.map(tab => (
    <button
      type="button"
      onClick={onTabSelected}
      className="tab"
      key={tab.id}
    >
      {tab.title}
    </button>
  ))
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
