import { Tab } from '../../types/Tab';
import { TabInfo } from '../Tab/TabInfo';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const activeTabId = tabs.find(tab => tab.id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  const foundTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabInfo
              key={tab.id}
              tab={tab}
              isActive={tab.id === activeTabId}
              onTabSelected={onTabSelected}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {foundTab?.content}
      </div>
    </div>
  );
};
