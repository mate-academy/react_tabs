import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

import './tabs.scss';

export const Tabs = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => (
  <>
    <ul className="tabs__list">
      {tabs.map(tab => (
        <li key={tab.id}>
          <button
            type="button"
            className={classNames(
              'tabs__item', { active: tab.id === selectedTabId },
            )}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    <p>
      {tabs.find(tab => tab.id === selectedTabId).content}
    </p>
  </>
);

Tabs.propTypes = {
  tabs: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      content: propTypes.string.isRequired,
    }),
  ).isRequired,
  selectedTabId: propTypes.string.isRequired,
  onTabSelected: propTypes.func.isRequired,
};
