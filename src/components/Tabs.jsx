import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <>
    {tabs.map(tab => (
      <button
        key={tab.id}
        type="button"
        onClick={() => onTabSelected(tab)}
      >
        {tab.title}
      </button>
    ))}
    <p>{selectedTab.content}</p>
  </>
);

const tabTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  onTabSelected: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(tabTypes).isRequired,
  selectedTab: tabTypes.isRequired,
};
