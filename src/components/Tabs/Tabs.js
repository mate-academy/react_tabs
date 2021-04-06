import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          className={tab.id === selectedTab.id
            ? ' App__button--selected'
            : 'App__button'}
          onClick={() => onTabSelected(tab.id)}
        >
          {tab.title}
        </button>
      ))}
      <p>{selectedTab.content}</p>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
