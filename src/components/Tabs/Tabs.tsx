type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (event: React.MouseEvent, tab: Tab) => void;
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: Props) => {
  return (
    <>
      <h1 className="title">
        Selected tab is {tabs.find(tab => tab.id === selectedTabId)?.title}
      </h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  key={tab.id}
                  className={tab.id === selectedTabId ? 'is-active' : ''}
                  data-cy="Tab"
                >
                  <a
                    href={tab.id}
                    data-cy="TabLink"
                    onClick={(event: React.MouseEvent) =>
                      onTabSelected(event, tab)
                    }
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs.find(tab => tab.id === selectedTabId)?.content}
        </div>
      </div>
    </>
  );
};
