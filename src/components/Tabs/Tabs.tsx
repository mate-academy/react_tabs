import { Tab } from '../../react-app-env';

interface TabsProps {
  onTabSelected:(arg0:Tab)=>void,
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
            {tabs.map(tabItem => (
              <li
                key={tabItem.id}
                className={`${checkedSelectedTabId === tabItem.id
                  ? 'is-active'
                  : ''}`}
                data-cy="Tab"
              >
                <a
                  href={`#${tabItem.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tabItem.id !== checkedSelectedTabId) {
                      onTabSelected(tabItem);
                    }
                  }}
                >
                  {tabItem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs
            .filter(tabItem => tabItem.id === checkedSelectedTabId)[0].content}
        </div>
      </div>
    );
  };
