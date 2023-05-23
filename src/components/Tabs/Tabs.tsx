import classNames from 'classnames';

type Tab = {
  id: string,
  title: string,
  content: string,
};

interface TabsProps {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = (id: string): Tab => (
    tabs.find((tab) => tab.id === id)
  || tabs[0]
  );

  const handleTabClick = (tab : Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  const findTab = selectedTab(selectedTabId);

  return (

    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={classNames({
                'is-active':
                 selectedTabId === tab.id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>

          ))}
        </ul>

      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {findTab.content}
      </div>
    </div>

  );
};
