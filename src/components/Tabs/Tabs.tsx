import React from 'react';
import { Tab } from '../../types/tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onSelectedTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs, selectedTabId, onSelectedTab,
}) => {
  const selectedTab = tabs.find(currentTab => currentTab.id === selectedTabId)
    || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={selectedTab.id === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (selectedTab.id === tab.id) {
                    return;
                  }

                  onSelectedTab(tab);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
