import { FC, SetStateAction } from 'react';
import { Tab } from '../../types';
import { TabItem } from '../TabItem/TabItem';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  setTabSelected: React.Dispatch<SetStateAction<Tab>>
};

export const Tabs: FC<Props> = ({ tabs, selectedTabId, setTabSelected }) => {
  const selectedTab: Tab = tabs.find((tab) => (
    tab.id === selectedTabId
  )) || tabs[0];

  const onTabSelect = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      setTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tabItem => (
            <TabItem
              key={tabItem.id}
              tabItem={tabItem}
              selectedTab={selectedTab}
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
