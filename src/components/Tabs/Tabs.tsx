import React from 'react';
import { Tab, TabProps } from './Tab';

export interface ITabDefinition
  extends Omit<TabProps, 'onSelect' | 'selected'> {
  content: React.ReactNode;
}

interface Props {
  tabs: ITabDefinition[];
  selectedTabId: string;
  onTabSelected: (tab: ITabDefinition) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = React.useMemo<ITabDefinition>(
    () => tabs.find((tab) => tab.id === selectedTabId) ?? tabs[0],
    [tabs, selectedTabId],
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <Tab
              id={tab.id}
              title={tab.title}
              onSelect={() => onTabSelected(tab)}
              selected={tab === selectedTab}
              key={tab.id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
