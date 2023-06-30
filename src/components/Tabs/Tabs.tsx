interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            return (
              <li
                data-cy="Tab"
                id={tab.id}
                key={tab.id}
                className={`${tab === currentTab ? 'is-active' : ''}`}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => tab !== currentTab && onTabSelected(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
