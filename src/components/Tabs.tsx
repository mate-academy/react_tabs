import React from 'react';
import classNames from 'classnames';
import '../App.scss';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId)
  || tabs[0];

  return (
    <div>
      <ul className="tab__list">
        {tabs.map(tab => (
          <li
            className={classNames(
              'tab__list-item',
              { 'tab__list-item-active': tab === selectedTab },
            )}
            key={tab.id}
          >
            <button
              type="button"
              className="tab__button"
              onClick={() => (tab !== selectedTab
                ? onTabSelected(tab)
                : null
              )}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p className="tab__content">
        {selectedTab.content}
      </p>
    </div>
  );
};
