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
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              className={classNames({ 'is-active': selectedTabId === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => ((selectedTabId !== tab.id)
                  && onTabSelected(tab))}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.filter((tab: Tab) => tab.id === selectedTabId)
          .map((tab: Tab) => tab.content)}
      </div>
    </div>
  );
};
