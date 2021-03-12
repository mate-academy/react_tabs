import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <>
    <div className="tabs">
      {tabs.map(tab => (
        <button
          type="button"
          className={classNames(
            'tab__header',
            { 'tab__header--active': selectedTabId === tab.id },
          )}
          key={tab.id}
          onClick={() => onTabSelected(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <div className="tab__content">
      {tabs.find(tab => tab.id === selectedTabId).content}
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
