interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

type Tab = {
  id: string;
  title: string;
  content: string;
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: Props) => {
  const activeTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      <ul>
        {tabs.map(tab => {
          return (
            <li
              className={tab.id === selectedTabId ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href="#tab-1"
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();

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

      {
        <div className="block" data-cy="TabContent">
          {activeTab?.content}
        </div>
      }
    </div>
  );
};
