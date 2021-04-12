import React from 'react';
import propTypes from 'prop-types';

import './Tabs.scss';

export const Tabs = ({ tabs, selectedTabId, selectTab }) => (
  <div className="tabs">
    {tabs.map(tab => (
      <div
        key={tab.id}
        className="tabs__item"
      >
        <button
          type="button"
          className="tabs__button"
          onClick={() => selectTab(tab.id)}
        >
          {tab.title}
        </button>
        <article className="tabs__content">
          {
          selectedTabId === tab.id
            ? tab.content
            : null
          }
        </article>
      </div>
    ))}
  </div>
);

Tabs.propTypes = {
  tabs: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      content: propTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectedTabId: propTypes.string.isRequired,
  selectTab: propTypes.func.isRequired,
};
