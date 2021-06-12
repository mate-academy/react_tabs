import React from 'react';
import './Tabs.css';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, title, selectTab }) => (
  <div className="field">
    {tabs.map(tab => (
      <div
        key={tab.id}
        className="block"
      >
        <button
          className="button"
          type="button"
          onClick={() => selectTab(tab.id)}
        >
          {tab.title}
        </button>
        <p>
          {title === tab.id && tab.content}
        </p>
      </div>
    ))}
  </div>
);

Tabs.propTypes = {
  selectTab: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
