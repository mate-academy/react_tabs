import { Tab } from '../../types/Tab';

type TabsProps = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void
};

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs
    .find((tab) => tab.id === selectedTabId) || tabs[0];

  const handleClick = (tab: Tab) => {
    const { id } = tab;

    if (id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id, title } = tab;
            const isTabSelected = id === selectedTab.id;

            return (
              <li
                key={id}
                className={isTabSelected
                  ? 'is-active'
                  : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleClick(tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {selectedTab && (
        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      )}
    </div>
  );
};
