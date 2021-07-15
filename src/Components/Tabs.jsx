import React from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {

  return (
    <div>
      <ul className="list-link-tabs">
        {tabs.map(tab => (
          <li
            className={
              selectedTab.id === tab.id
                ? 'link-tab-active link-tabs'
                : 'link-tabs'}
            key={tab.id}
            onClick={() => (onTabSelected(tab))}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <p className="tab-content">{selectedTab.content}</p>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  selectedTab: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
