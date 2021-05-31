import React from 'react';
import PropTypes from 'prop-types';

import './Tabs.scss';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <>
    <ul className="tabs__list">
      {tabs.map(tab => (
        <li key={tab.id} className="tabs__item">
          <a
            className="tabs__link"
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
    <p className="tabs__content">
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
    }).isRequired,
  ).isRequired,
  selectedTabId: PropTypes.string.isRequired,
  onTabSelected: PropTypes.func.isRequired,
};
