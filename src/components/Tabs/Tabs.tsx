import React from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  selectedTabId: string;
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (
  { selectedTabId, tabs, onTabSelected },
) => {
  const selectedTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isCurrentSelected = tab.id === selectedTab.id;

            return (
              <li
                className={cn({ 'is-active': isCurrentSelected })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (!isCurrentSelected) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
