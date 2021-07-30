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
              className="button"
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
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
