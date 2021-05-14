import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Tabs.css';

export const Tabs = ({
  tabs, selectedTabId, onTabSelected,
}) => (
  <ul className="Tabs">
    {tabs.map(tab => (
      <li
        key={tab.id}
        className={cn('Tabs__item', {
          'Tabs__item--active': selectedTabId === tab.id,
        })}
      >
        <a
          href={`#${tab.id}`}
          id={tab.id}
          className={cn('Tabs__link', {
            'Tabs__link--active': selectedTabId === tab.id,
          })}
          onClick={(e) => {
            const tabId = e.target.id;

            if (tabId !== selectedTabId) {
              onTabSelected(tabId);
            }
          }}
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
  selectedTabId: PropTypes.string,
  onTabSelected: PropTypes.func.isRequired,
};

Tabs.defaultProps = {
  tabs: [],
  selectedTabId: 'tab-1',
};
