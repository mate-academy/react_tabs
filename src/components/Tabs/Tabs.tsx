import { Tab } from '../Tab';
import { TabType } from '../../types/Tab';

type Props = {
  tabs: TabType[],
  selectedTabId: number,
  onTabSelected: (tabId: number) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab, index) => (
          <Tab
            tab={tab}
            index={index}
            selectedTabId={selectedTabId}
            onTabSelected={onTabSelected}
          />
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs[selectedTabId - 1].content}
    </div>
  </div>
);
