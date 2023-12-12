import { Tab } from '../../types/Tab';
import { TabInfo } from '../Tab/TabInfo';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabId: string) => void;
};

export const TabsInfo = ({ tabs, selectedTabId, onTabSelected }:Props) => {
  return (
    <ul>
      {tabs.map(tab => (
        <TabInfo
          key={tab.id}
          tab={tab}
          isActive={tab.id === selectedTabId}
          onTabSelected={onTabSelected}
        />
      ))}
    </ul>
  );
};
