import React from 'react';
import classNames from 'classnames';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  selectTab: (tab: Tab) => void;
}

export const Tabs: React.FC<Props>
  = React.memo((
    {
      tabs,
      selectedTabId,
      selectTab,
    },
  ) => {
    return (
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={
              classNames('tab', { 'tab--active': (selectedTabId === tab.id) })
            }
            // className={selectedTabId === tab.id ? 'tab tab--active' : 'tab'}
          >
            <button type="button" onClick={() => selectTab(tab)}>
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    );
  });
