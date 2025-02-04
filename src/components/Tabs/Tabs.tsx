type Props = {
  tabs: {
    id: string;
    title: string;
    content: string;
  }[];
  selectedTabId: string;
  onTabSelected: (tabID: string) => void;
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: Props) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                className={selectedTabId === tab.id ? 'is-active' : ''}
                data-cy="Tab"
                onClick={() => onTabSelected(tab.id)}
              >
                <a href={`#${tab.id}`} data-cy="TabLink">
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.map(tab => (tab.id === selectedTabId ? tab.content : ''))}
      </div>
    </div>
  );
};
