import { SetSelectedTab } from '../../types/SetselectedTab';
import { Tab } from '../../types/Tab';
import { TabInfo } from '../TabInfo';

type Props = {
  tabs: Tab[];
  onTabSelected:SetSelectedTab,
  selectedTabId: string,
  selectedTabContent: string,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
  selectedTabContent,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabInfo
              key={tab.id}
              tab={tab}
              onTabSelected={onTabSelected}
              selectedTabId={selectedTabId}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>
    </div>
  );
};
