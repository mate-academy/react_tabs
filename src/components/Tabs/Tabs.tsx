import { Tab } from '../../react-app-env';

interface TabsProps {
  onTabSelected:(tab:Tab)=>void,
  selectedTabId: string,
  tabs: Tab[],
}

export const Tabs: React.FC<TabsProps>
  = ({ onTabSelected, tabs, selectedTabId }) => {
    const checkedSelectedTabId
      = tabs.find(tab => tab.id === selectedTabId)
        ? selectedTabId
        : tabs[0].id;

    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tabItem => {
              const { id, title } = tabItem;

              return (
                <li
                  key={id}
                  className={`${checkedSelectedTabId === id
                    ? 'is-active'
                    : ''}`}
                  data-cy="Tab"
                >
                  <a
                    href={`#${id}`}
                    data-cy="TabLink"
                    onClick={() => {
                      if (id !== checkedSelectedTabId) {
                        onTabSelected(tabItem);
                      }
                    }}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs
            .filter(tabItem => tabItem.id === checkedSelectedTabId)[0].content}
        </div>
      </div>
    );
  };
