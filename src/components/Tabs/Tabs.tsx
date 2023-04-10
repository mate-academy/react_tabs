import { useCallback } from 'react';

import { TabInfo } from '../TabInfo/TabInfo';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    selectedTabId,
    tabs,
    onTabSelected,
  } = props;

  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleSelectTab = useCallback((tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  }, [selectedTabId]);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabInfo
              tab={tab}
              onTabSelect={() => handleSelectTab(tab)}
              currentTabId={currentTab.id}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
