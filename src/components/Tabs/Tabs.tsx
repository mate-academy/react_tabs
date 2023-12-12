import classNames from 'classnames';
import { Tab } from '../types/Tab';
import { TabsProps } from '../types/Tabs';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabsProps) => {
  const selectedTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

  const getTabContent = tabs.find((tab) => tab.id === selectedTabId)?.content;

  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              className={classNames({ 'is-active': tab.id === selectedTab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getTabContent}
      </div>
    </div>
  );
};
