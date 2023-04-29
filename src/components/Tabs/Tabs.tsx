import { FC } from 'react';
import { Tab } from '../../interfaces/Tab';
import { TabInfo } from './TabInfo';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabselected: (tab: Tab) => void;
}
export const Tabs:FC<Props> = ({
  tabs,
  selectedTabId,
  onTabselected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabInfo
              tab={tab}
              isActive={tab.id === selectedTabId}
              onTabselected={onTabselected}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content}
      </div>
    </div>
  );
};
