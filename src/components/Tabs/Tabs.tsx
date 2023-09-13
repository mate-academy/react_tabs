import React from 'react';
import { Tab } from '../../Types';

type TabsProps = {
  tabs: Tab[],
  selectedTabId: string,
  handleTabSelect: (tab: Tab) => void,
};

export const Tabs: React.FC<TabsProps> = (
  { tabs, selectedTabId, handleTabSelect },
) => {
  const updatedSelectedTabId = !tabs.some(tab => tab.id === selectedTabId)
    ? tabs[0].id
    : selectedTabId;

  const selectedTab = tabs.find(
    tab => tab.id === updatedSelectedTabId,
  ) || tabs[0];

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={tab.id === selectedTab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="tabLink"
                  onClick={() => {
                    if (tab.id !== selectedTab.id) {
                      handleTabSelect(tab);
                    }
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
    </>
  );
};
