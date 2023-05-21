import { Tab } from '../../types/Tab';

interface TabsProps {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabsProps) => {
  const defaultTab = tabs[0];
  const selectedTab = () => {
    return tabs.find((tab) => tab.id === selectedTabId) || defaultTab;
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={tab.id === selectedTab().id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => (
                  selectedTab().id !== tab.id && onTabSelected(tab)
                )}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab().content}
      </div>
    </div>
  );
};
