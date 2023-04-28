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
  const selectedTab = tabs.find(({ id }) => id === selectedTabId);

  const isNoTabSelected = tabs.every(
    ({ id }: Tab): boolean => id !== selectedTabId,
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => {
            const isTabSelected = tab.id === selectedTabId;
            const isFirstTab = index === 0;
            const isActiveTab = isTabSelected
            || (isNoTabSelected && isFirstTab);

            return (
              <TabItem
                tab={tab}
                isActiveTab={isActiveTab}
                onTabSelected={onTabSelected}
              />
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab?.content}
      </div>
    </div>
  );
};
