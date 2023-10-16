import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  handleTabSelection: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    handleTabSelection,
  },
) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleClick = (
    tab: Tab,
  ) => {
    if (selectedTabId !== tab.id) {
      handleTabSelection(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={
                selectedTab.id === tab.id ? 'is-active' : ''
              }
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
              >
                {tab.title}
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
