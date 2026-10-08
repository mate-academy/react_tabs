type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: Props) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === selectedTab.id ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== selectedTab.id) {
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
        {selectedTab.content}
      </div>
    </div>
  );
};
