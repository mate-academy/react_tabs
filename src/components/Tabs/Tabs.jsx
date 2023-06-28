import { TabItem } from '../TabItem/TabItem';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const isTab = tabs.find(item => item.id === selectedTabId);
  let tabId = selectedTabId;

  if (!isTab) {
    tabId = tabs[0].id;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem
              key={tab.id}
              tab={tab}
              selectedTabId={tabId}
              onTabSelected={onTabSelected}
            />
          ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === tabId).content }
      </div>
    </div>
  );
}
