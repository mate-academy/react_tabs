type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  selectedTabId: string,
  tabs: Tab[],
  onTabSelected : (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => (
            <li
              className={item.id === selectedTab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={item.id}
            >
              <a
                href={`#${item.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (item.id !== selectedTab.id) {
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
        {selectedTab.content}
      </div>
    </div>
  );
};
