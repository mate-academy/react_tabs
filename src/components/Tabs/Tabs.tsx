import { FC } from 'react';
import { Tab as TabType } from '../../types';
import { Tab } from '../TabItem/Tab';

type Props = {
  tabs: TabType[];
  selectedTabId: string;
  setTabSelected: (tab: TabType) => void;
};

export const Tabs: FC<Props> = ({ tabs, selectedTabId, setTabSelected }) => {
  const selectedTab: TabType = tabs.find((tab) => (
    tab.id === selectedTabId
  )) || tabs[0];

  const onTabSelect = (tab: TabType) => {
    if (tab.id !== selectedTabId) {
      setTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              tab={tab}
              isActive={tab.id === selectedTabId}
              onTabSelect={onTabSelect}
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
