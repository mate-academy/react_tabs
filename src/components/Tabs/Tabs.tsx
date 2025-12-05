type Tab = {
  id: string;
  title: string;
  content: string;
};

type TabProps = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (selectedTab: Tab) => void;
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabProps) => {
  const resolvedId = tabs.find(t => t.id === selectedTabId)?.id ?? tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => {
            const className = tab.id === resolvedId ? 'is-active' : '';

            return (
              <li key={tab.id} data-cy="Tab" className={className}>
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={event => {
                    event.preventDefault();

                    if (tab.id !== resolvedId) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(t => t.id === resolvedId)?.content}
      </div>
    </div>
  );
};
