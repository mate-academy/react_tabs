import { Tab } from '../../types/Tab';
import { TabItem } from '../Tab/TabItem';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(({ id }: Tab) => id === selectedTabId)
  || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isTabSelected = tab.id === selectedTab.id;

            return (
              <TabItem
                tab={tab}
                isActiveTab={isTabSelected}
                onTabSelected={onTabSelected}
                key={tab.id}
              />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
