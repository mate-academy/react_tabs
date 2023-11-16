type Tab = {
  id: string;
  title: string;
  content: string;
};

type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<TabsProps> = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => {
  const isValidTabId = tabs.some(tab => tab.id === selectedTabId);
  const activeTabId = isValidTabId ? selectedTabId : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => (
            <li
              className={activeTabId === item.id
                ? 'is-active'
                : ''}
              data-cy="Tab"
              key={item.id}
            >
              <a
                href={`#${item.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (item.id !== selectedTabId) {
                    onTabSelected(item);
                  }
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
