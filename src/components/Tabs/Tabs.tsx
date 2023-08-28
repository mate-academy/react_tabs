export type Tab = {
  id: string
  title: string
  content: string
};

type TabsProps = {
  tabs: Tab[]
  selectedTabId: string
  onTabSelected: (tab: Tab) => void
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabsProps) => {
  const selectedTabContent = tabs
    .find(({ id }) => id === selectedTabId)?.content;
  const selectedTab = tabs
    .find(({ id }) => id === selectedTabId) || tabs[0];
  const handleTabSelect = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={selectedTab.id === tab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabSelect(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>
    </div>
  );
};
