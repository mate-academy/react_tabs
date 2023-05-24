interface Tab {
  id: string,
  title: string,
  content: string,
}

interface TabsProps {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabsProps) => {
  const activeTabId = tabs.some(tab => tab.id === selectedTabId)
    ? selectedTabId
    : tabs;

  const handleTabChange = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                {...activeTabId === tab.id
                  ? { className: 'is-active' }
                  : undefined}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabChange(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {(tabs.find(tab => tab.id === selectedTabId)?.content)}
      </div>
    </div>
  );
};
