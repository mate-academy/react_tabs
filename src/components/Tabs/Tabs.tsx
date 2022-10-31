import classNames from 'classnames';

export interface Tab {
  id: string;
  title: string;
  content: string;
}

interface ArrOfTabs {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (arg: Tab) => void;
}

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}: ArrOfTabs) => {
  const handleTabClick = (idIsEqual: boolean, tab: Tab) => (
    !idIsEqual && onTabSelected(tab)
  );

  const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => {
            const { id, title } = tab;
            const idIsEqual = currentTab.id === id;

            return (
              <li
                className={classNames(
                  {
                    'is-active': idIsEqual,
                  },
                )}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabClick(idIsEqual, tab)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
