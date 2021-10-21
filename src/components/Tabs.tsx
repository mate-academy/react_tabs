import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              className={classNames('tab', { 'tab--is-active': selectedTabId === tab.id })}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <span>
        {selectedTab?.content}
      </span>
    </>
  );
};
