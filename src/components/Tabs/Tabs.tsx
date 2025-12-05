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
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => {
            const className = tab.id === selectedTabId ? 'is-active' : '';

            return (
              <li key={tab.id} data-cy="Tab" className={className}>
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={event => {
                    event.preventDefault();
                    onTabSelected(tab);
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
        {tabs.find(tab => tab.id === selectedTabId)?.content ||
          'Content not found'}
      </div>
    </div>
  );
};
