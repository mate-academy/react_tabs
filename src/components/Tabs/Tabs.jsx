import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({
  tabs,
  selectedTab,
  onTabChange,
}) => (
  <>
    {tabs.map(tab => (
      <button
        type="button"
        key={tab.id}
        onClick={() => onTabChange(tab)}
      >
        {tab.title}
      </button>
    ))}
    <p>{selectedTab.content}</p>
  </>
);

const TabTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(TabTypes).isRequired,
  selectedTab: TabTypes.isRequired,
  onTabChange: PropTypes.func.isRequired,
};
