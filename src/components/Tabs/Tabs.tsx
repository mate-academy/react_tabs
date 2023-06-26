export interface Tab {
  id: string,
  title: string,
  content: string,
}

interface TabsProps {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = (
    tabs.find(tab => selectedTabId === tab.id) || tabs[0]
  );

  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            return (
              <li
                className={selectedTab.id === tab.id ? 'is-active' : ''}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(tab)}
                >
                  {tab.title}
                </a>
              </li>
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
