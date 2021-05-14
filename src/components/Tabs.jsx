import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Tabs.css';

export const Tabs = ({
  tabs, selectedTabId, onTabSelected,
}) => (
  <>
    <ul className="Tabs">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={cn('Tabs__item',
            selectedTabId === tab.id && 'Tabs__item--active')
          }
        >
          <a
            href={`#${tab.id}`}
            id={tab.id}
            className={cn('Tabs__link',
              selectedTabId === tab.id && 'Tabs__link--active')
            }
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
    <p>
      {tabs.find(tab => tab.id === selectedTabId).content}
    </p>
  </>
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
