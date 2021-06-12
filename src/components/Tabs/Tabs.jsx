import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => (
  <>
    <div className="tabs__buttons">
      {tabs.map(tab => (
        <button
          type="button"
          className="tabs__btn"
          key={tab.id}
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <div className="tabs__content">
      {tabs.map((tab) => {
        if (tab.id !== selectedTabId) {
          return null;
        }

        return <p key={tab.id}>{tab.content}</p>;
      })}
    </div>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
