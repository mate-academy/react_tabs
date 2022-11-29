import { Tab } from '../../types/tab';

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTabID: string,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  onTabSelected,
  selectedTabID,
}) => {
  const handleTabSelection = (tab: Tab) => {
    if (selectedTabID !== tab.id) {
      onTabSelected(tab);
    }
  };

  const currentTab = tabs.find(tab => tab.id === selectedTabID) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={selectedTabID === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabSelection(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
