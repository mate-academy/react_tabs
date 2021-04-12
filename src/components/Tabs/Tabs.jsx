import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <>
    <div className="tabs">
      <ul>
        {
          tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === selectedTab })}
            >
              <a onClick={() => onTabSelected(tab.id)}>{tab.title}</a>
            </li>
          ))
        }
      </ul>
    </div>
    <div className="content">
      <p>
        {tabs.find(tab => tab.id === selectedTab).content}
      </p>
    </div>
  </>
)

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  selectedTab: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
}
