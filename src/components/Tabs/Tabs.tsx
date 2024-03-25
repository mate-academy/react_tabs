type TabsProps = {
  tabs: { id: string; title: string; content: string }[];
  onTabSelected: (tab: { id: string; title: string; content: string }) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const displayTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={`${tab.id === displayTab?.id ? 'is-active' : '  '}`}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {displayTab.content}
      </div>
    </div>
  );
};
