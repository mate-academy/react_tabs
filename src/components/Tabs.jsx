import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <>
    <div className="tabs__list">
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          className={selectedTabId === tab.id ? 'selected' : ''}
          onClick={() => {
            if (selectedTabId !== tab.id) {
              onTabSelected(tab.id);
            }
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <div className="tabs__content">
      {tabs.map(tab => (
        <React.Fragment key={tab.id}>
          {selectedTabId === tab.id && <p>{tab.content}</p>}
        </React.Fragment>
      ))}
    </div>
  </>
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
