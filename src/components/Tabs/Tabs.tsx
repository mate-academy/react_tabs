import cn from 'classnames';
import { Tab } from '../../types';

type TabsProp = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (active: Tab) => void,
};

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabsProp) => {
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
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={cn({
                  'is-active': tab.id === selectedTabId
                  || (tab.id === tabs[0].id
                  && tabs.every(item => item.id !== selectedTabId)),
                })}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => handleTabClick(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
