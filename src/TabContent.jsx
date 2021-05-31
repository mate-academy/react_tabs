import React from 'react';
import PropTypes from 'prop-types';

export const TabContent = ({ tabs, selectedTab, selectedTabId }) => {
  const selectedTabContent = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          onClick={() => (selectedTab(tab))}
        >
          {tab.title}
        </button>
      ))}
      <p>
        {selectedTabContent.content}
      </p>
    </div>
  );
};

TabContent.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTab: PropTypes.func.isRequired,
  selectedTabId: PropTypes.string.isRequired,
};
