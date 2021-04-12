import React from 'react';
import propTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, selectTab }) => (
  <>
    {tabs.map(tab => (
      <div key={tab.title}>
        <button
          type="button"
          onClick={() => selectTab(tab.title)}
        >
          {tab.title}
        </button>
        <article>
          {
          selectedTabId === tab.title
            ? tab.content
            : null
          }
        </article>
      </div>
    ))}
  </>
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
