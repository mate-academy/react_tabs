import { Tab } from '../../types/Tab';
import { TabInfo } from '../Tab/TabInfo';

interface Props {
  tabs: Tab[],
  onTabClick: (id: string) => void,
  selectedTab: Tab,
}
export const Tabs: React.FC<Props> = ({
  tabs,
  onTabClick,
  selectedTab,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <TabInfo
            tab={tab}
            onTabClick={onTabClick}
            selectedTab={selectedTab}
          />
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {selectedTab.content}
    </div>
  </div>
);
