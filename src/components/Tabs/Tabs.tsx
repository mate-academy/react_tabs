import { FC } from 'react';
import { Tab } from '../../types/Tab';
import { TabComponent } from '../Tab/Tab';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const handleTabSelected = (tab: Tab) => {
    onTabSelected(tab);
  };

  const selectedTab = tabs.find((tab) => tab.id === selectedTabId) ?? tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <TabComponent
              key={tab.id}
              tab={tab}
              isActive={tab.id === selectedTab.id}
              onTabClick={handleTabSelected}
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
