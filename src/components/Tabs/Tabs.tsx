import classNames from 'classnames';
import { SyntheticEvent } from 'react';
import { Tab, TabsProps } from '../../types/tab';

export const Tabs = ({ tabs, selectedTab, onTabSelected }: TabsProps) => {
  const handleTabClick = (event: SyntheticEvent, tab: Tab) => {
    event.preventDefault();

    if (!tab?.id) {
      onTabSelected(tabs[0]);

      return;
    }

    if (tab.id === selectedTab.id) {
      return;
    }

    onTabSelected(tab);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              className={classNames({
                'is-active': tab.id === selectedTab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={(event) => handleTabClick(event, tab)}
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
        {selectedTab.content}
      </div>
    </div>
  );
};
