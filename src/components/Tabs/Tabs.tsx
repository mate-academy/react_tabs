import { Tab } from '../../types/Tab';
import { TabInfo } from '../Tab/TabInfo';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void;
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }:Props) => {
  const selectedTabIdAdjusted = tabs
    .find(tab => tab.id === selectedTabId) ? selectedTabId : tabs[0].id;

  const selectedTab = tabs.filter((tab) => tab.id === selectedTabIdAdjusted)[0];

  return (
    <div className="section">
      <h1 className="title">
        {selectedTabId ? `Selected tab is ${selectedTab.title}` : ''}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <TabInfo
                key={tab.id}
                tab={tab}
                isActive={tab.id === selectedTabIdAdjusted}
                onTabSelected={onTabSelected}
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </div>
  );
};
