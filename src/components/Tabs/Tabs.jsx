import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <>
    {tabs.map(tab => (
      <button
        className="button"
        type="button"
        key={tab.id}
        onClick={() => onTabSelected(tab)}
      >
        {tab.title}
      </button>
    ))}
    <p className="text">
      {selectedTab.content}
    </p>
  </>
);

const TabType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  selectedTab: TabType.isRequired,
  tabs: PropTypes.arrayOf(TabType).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
