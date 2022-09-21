import classNames from 'classnames';

interface Props {
  id: string,
  title: string,
  content: string,
}

interface TabsType {
  tabs: Props[],
  selectedTabId: string,
  onTabSelected: (value: Props) => void,
}

export const Tabs: React.FC<TabsType> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handelClick = (tab: Props) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Props) => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames(
                { 'is-active': tab.id === selectedTab.id },
              )}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handelClick(tab)}
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
