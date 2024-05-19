type Tab = {
  id: string;
  title: string;
  content: string;
};

type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (id: string) => void;
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {selectedTab ? selectedTab.title : tabs[0].title}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(({ id, title }) => (
              <li
                key={id}
                className={id === selectedTabId ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  onClick={() => {
                    if (id !== selectedTabId) {
                      onTabSelected(id);
                    }
                  }}
                  data-cy="TabLink"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {/* Some text 1 */}
          {selectedTab ? selectedTab.content : tabs[0].content}
        </div>
      </div>
    </div>
  );
};
