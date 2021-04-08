import React from 'react';
import PropTypes from 'prop-types';

import './tabs.css';

export const Tabs = ({ visibleTabs, change }) => (
  <section className="tabs">
    <div className="buttons">
      {visibleTabs.map(tab => (
        <button
          key={tab.id}
          type="button"
          className="btn btn-light"
          onClick={() => change(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>
    {visibleTabs.map(tab => (
      <p
        style={{ display: tab.visible }}
        key={tab.id}
      >
        {tab.content}
      </p>
    ))}
  </section>
);

Tabs.propTypes = {
  visibleTabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      visible: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  change: PropTypes.func.isRequired,
};
