import React from 'react';
import propTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, selectTab }) => (
  <>
    {tabs.map(tab => (
      <div key={tab.id}>
        <button
          type="button"
          onClick={() => selectTab(tab.id)}
        >
          {tab.title}
        </button>
        <article>
          {
          selectedTabId === tab.id
            ? tab.content
            : null
          }
        </article>
      </div>
    ))}
  </>
);

const Tab = propTypes.shape({
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
});

Tabs.propTypes = {
  tabs: propTypes.arrayOf(
    Tab.isRequired,
  ).isRequired,
  selectedTabId: propTypes.string.isRequired,
  selectTab: propTypes.func.isRequired,
};
