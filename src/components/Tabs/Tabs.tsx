type Props = {
  tabs: { id: string; title: string; content: string }[];
  selectedTabId: string;
  onTabSelected: (tab: { id: string; title: string; content: string }) => void;
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: Props) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={`${selectedTab.id === tab.id ? 'is-active' : ''}`}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={event => {
                    event.preventDefault();
                    if (selectedTabId !== tab.id) {
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
        {selectedTab.content}
      </div>
    </div>
  );
};
