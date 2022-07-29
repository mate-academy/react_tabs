import React from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  tabSelected: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  tabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId)
  || tabs[0];

  const isTabSelected = (tab: Tab) => selectedTab.id === tab.id;

  const tabChange = (tab: Tab) => {
    if (isTabSelected(tab)) {
      return;
    }

    tabSelected(tab);
  };

  return (
    <>
      <div>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={(tab === selectedTab && 'is-active') || ''}
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() => tabChange(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="tab-content">
          {selectedTab.content}
        </div>
      </div>
    </>
  );
};
