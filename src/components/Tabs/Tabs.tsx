import React from 'react';
import cn from 'classnames';
import { Tab } from '../../types/Tab';
import { TabInfo } from '../Tab/Tab';

type Props = {
  tabs: Tab[],
  onTabSelect: (tab: Tab) => void,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelect,
  selectedTabId,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const { id, content } = selectedTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isSelected = tab.id === id;

            return (
              <li
                key={tab.id}
                className={cn({ 'is-active': isSelected })}
                data-cy="Tab"
              >
                <TabInfo
                  tab={tab}
                  onTabSelected={onTabSelect}
                  isSelected={isSelected}
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
