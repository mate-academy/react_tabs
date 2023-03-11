import { Tab } from '../../types/tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (currentTab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab: Tab = (
    tabs.find((tab) => (
      tab.id === selectedTabId
    )) || tabs[0]
  );
  const handleTabSelect = (
    currentTabId: string,
    chosenTabId: string,
    element: Tab,
  ) => {
    if (currentTabId !== chosenTabId) {
      onTabSelected(element);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;

            return (
              <li
                key={id}
                data-cy="Tab"
                className={
                  id === selectedTab.id
                    ? 'is-active'
                    : ''
                }
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabSelect(id, selectedTab.id, tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
