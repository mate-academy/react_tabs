import React from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';
import { TabInfo } from './TabInfo';

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
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const { id, content } = selectedTab;

  const handleTabClick = (selected: boolean, tab: Tab) => {
    if (!selected) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => {
            const isSelected = tab.id === id;

            return (
              <li
                key={tab.id}
                className={cn({
                  'is-active': isSelected,
                })}
                data-cy="Tab"
              >
                <TabInfo
                  tab={tab}
                  onTabSelected={() => {
                    handleTabClick(isSelected, tab);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
