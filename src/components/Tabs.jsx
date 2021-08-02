import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = React.memo(({ selectedTab, tabs, onTabSelected }) => {
  const { content } = selectedTab;

  return (
    <>
      {tabs.map(tab => (
        <button
          style={tab === selectedTab ? { color: 'red' } : {}}
          type="submit"
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}
      <p>
        {content}
      </p>
    </>
  );
});

const tabType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  selectedTab: tabType.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(tabType).isRequired,
};
