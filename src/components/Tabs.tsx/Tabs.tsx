import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      <ul className="tabs-list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabs-list__item"
          >
            <button
              className={classNames(
                'button tabs-list__item-button',
                {
                  'button tabs-list__item-button-active': selectedTabId === tab.id,
                },
              )}
              type="button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="content">
        {selectedTab && selectedTab.content}
      </div>
    </div>
  );
};
