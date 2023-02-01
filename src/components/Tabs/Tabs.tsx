import React from 'react';
import { TabType } from '../../types/Tab';
import { Tab } from '../Tab';

type Props = {
  tabs: TabType[];
  selectedTabId: string;
  onTabSelected: (tab: TabType) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabs,
    selectedTabId,
    onTabSelected,
  } = props;

  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];
  const { content } = selectedTab;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <Tab
                key={tab.id}
                tab={tab}
                onTabSelected={onTabSelected}
                selectedTabId={selectedTabId}
              />
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
