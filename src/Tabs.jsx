import React from 'react';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <>
    <div className="d-flex gap-2 m-2">
      {tabs.map(tab => (
        <div key={tab.id}>
          <button
            type="button"
            onClick={() => onTabSelected(tab.id)}
            className="btn btn-light"
          >
            {tab.title}
          </button>
        </div>
      ))}
    </div>
    <p style={{ width: '13rem' }} className="card p-2 m-2">
      {tabs.find(tab => tab.id === selectedTabId).content}
    </p>
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
