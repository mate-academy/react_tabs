import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  tabs.map(tab => (
    <>
      <div className="tab__list">
        <button
          key={tab.id}
          type="button"
          className={selectedTabId === tab.id ? 'selected' : ''}
          onClick={() => {
            if (selectedTabId !== tab.id) {
              onTabSelected(tab.id);
            }
          }}
        >
          {tab.title}
        </button>
      </div>
      <div className="tab__content">
        {selectedTabId === tab.id && <p>{tab.content}</p>}
      </div>
    </>
  ))
);

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
