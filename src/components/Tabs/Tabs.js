import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.scss';

export const Tabs = ({ tabs, setTabId, selectedTab }) => (
  <div className="tabs">
    {tabs.map(tab => (
      <div key={tab.id}>
        <button
          className={selectedTab === tab.id ? 'active' : ''}
          onClick={() => setTabId(tab.id)}
        >
          {tab.title}
        </button>
      </div>
    ))}
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setTabId: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};