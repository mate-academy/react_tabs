import { Tab } from '../../types/Tab';

type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabsProps) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === currentTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab && currentTab.content}
      </div>
    </div>
  );
};
