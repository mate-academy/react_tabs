import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tabs.scss';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => (
  <div className="Tabs">
    <ul className="Tabs-list">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={classNames('Tabs-item', {
            'is-active': tab.id === selectedTabId,
          })}
        >
          <a
            className="Tab-link"
            href="#/"
            onClick={() => {
              onTabSelected(tab);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>

    <p className="Tab-text">
      {tabs.find(tab => tab.id === selectedTabId).content}
    </p>
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,

  onTabSelected: PropTypes.func.isRequired,

  selectedTabId: PropTypes.string.isRequired,
};
