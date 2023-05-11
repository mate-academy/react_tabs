export type Tab = {
  id: string;
  title: string;
  content: string;
};

type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabsProps) => {
  const isLinkActive = (tabId: string) => {
    const isAnySelected = tabs.some(tab => tab.id === selectedTabId);

    if (isAnySelected && tabId === selectedTabId) {
      return 'is-active';
    }

    if (!isAnySelected && tabId === tabs[0].id) {
      return 'is-active';
    }

    return undefined;
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            return (
              <li
                key={tab.id}
                className={isLinkActive(tab.id)}
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
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find((tab) => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
