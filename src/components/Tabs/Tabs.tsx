import React from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';
import { TabComponent } from '../Tab/TabComponent';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id } = tab;

            const handleTabClick = (clickedTab: Tab) => {
              if (clickedTab.id !== selectedTab.id) {
                onTabSelected(tab);
              }
            };

            return (
              <li
                key={id}
                className={cn({ 'is-active': id === selectedTab.id })}
                data-cy="Tab"
              >
                <TabComponent
                  tab={tab}
                  handleTabClick={handleTabClick}
                />
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
