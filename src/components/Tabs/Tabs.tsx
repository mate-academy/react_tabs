import cn from 'classnames';
import { Tab } from '../types/Tab';

interface PropsTabs {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
  selectedTabId: string;
}

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: PropsTabs) => {
  const getSelectedTab = (id: string) => (
    tabs.find(tab => tab.id === id) || tabs[0]
  );

  const selectedTab = getSelectedTab(selectedTabId);

  const handleTabClick = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                className={cn({ 'is-active': selectedTab.id === id })}
                data-cy="Tab"
                key={id}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (id !== selectedTabId) {
                      handleTabClick(tab);
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
        {selectedTab.content}
      </div>
    </div>
  );
};
