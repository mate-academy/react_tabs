import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = React.memo(({ selectedTabId, tabs, onTabSelected }) => {
  const { content } = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        {tabs.map(tab => (
          <li
            key={tab.id}
            style={{ display: 'inline' }}
          >
            <button
              style={tab.id === selectedTabId ? { color: 'red' } : {}}
              type="submit"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
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
