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

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: ArrOfTabs) => {
  const isCurrentTab = tabs
    .some((tab) => tab.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab, index: number) => {
            const { id, title } = tab;
            const idIsEqual = selectedTabId === id;

            return (
              <li
                className={classNames(
                  {
                    'is-active': idIsEqual
                      || (!isCurrentTab && !index),
                  },
                )}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => (!idIsEqual && onTabSelected(tab))}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.filter((tab: Tab) => tab.id === selectedTabId)
          .map((tab: Tab) => tab.content)}
      </div>
    </div>
  );
};
