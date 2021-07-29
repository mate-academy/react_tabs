import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onClick, selectedTab }) => (
  <div>
    {tabs.map(tab => (
      <button
        key={tab.id}
        type="button"
        className="button"
        onClick={() => onClick(tab)}
      >
        {tab.title}
      </button>
    ))}
    <div className="box">
      {selectedTab.content}
    </div>
  </div>
);

Tabs.propTypes = {
  onClick: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
