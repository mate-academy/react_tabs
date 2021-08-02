import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = React.memo(({ selectedTabId, tabs, onTabSelected }) => {
  const { content } = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      {tabs.map(tab => (
        <button
          style={tab.id === selectedTabId ? { color: 'red' } : {}}
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

Tabs.propTypes = {
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
};
