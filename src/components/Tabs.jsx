import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/scss/bootstrap.scss';
import './Tabs.scss';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li
            className="nav-item"
            key={tab.id}
          >
            <button
              type="button"
              className={`nav-link ${tab.id === selectedTabId ? 'active' : ''}`}
              onClick={() => {
                onTabSelected(tab);
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p>
        {currentTab.content}
      </p>
    </>
  )
};

const TabType = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(TabType)).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
