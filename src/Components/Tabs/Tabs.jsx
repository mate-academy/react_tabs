import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, onChange, selectedTab }) => (
  <>
    {tabs.map(tab => (
      <li
        key={tab.id}
        className="nav-item"
      >
        <button
          type="button"
          onClick={() => onChange(tab.id)}
          className={`${selectedTab.id === tab.id
            ? 'nav-link active'
            : 'nav-link'}`}
        >
          {tab.title}
        </button>
      </li>
    ))}
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
  selectedTab: PropTypes.objectOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};
