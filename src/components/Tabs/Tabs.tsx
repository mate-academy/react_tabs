import { Tab } from '../../types/Tab';
import { TabLink } from '../TabLink';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

function getTabById(tabs: Tab[], id: string): Tab {
  return tabs.find(tab => tab.id === id) || tabs[0];
}

export const Tabs: React.FC<Props> = (
  {
    tabs,
    onTabSelected,
    selectedTabId,
  },
) => {
  const { id, content } = getTabById(tabs, selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabLink
              key={tab.id}
              tab={tab}
              isActive={tab.id === id}
              onTabSelected={onTabSelected}
            />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
