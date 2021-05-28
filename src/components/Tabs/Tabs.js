/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <>
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab.id}>
          <a
            href="#"
            className={classNames('nav-link', {
              active: tab.id === selectedTabId,
            })}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
    <p>
      {tabs.find(tab => selectedTabId === tab.id).content}
    </p>
  </>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
