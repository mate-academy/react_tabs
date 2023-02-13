import cn from 'classnames';
import React from 'react';
/* eslint-disable no-console */
type Props = {
  tabId: string,
  onTabSelected: (tab: Tab)=>void,
  tabs: Tab[],
};

export const Tabs: React.FC<Props> = (props) => {
  const {
    tabId,
    onTabSelected,
    tabs,
  } = props;

  const selectedTab = tabs.find(tab => tab.id === tabId) || tabs[0];
  const handleClick = (tab: Tab = tabs[0]) => (
    !(selectedTab.id === tab.id) && onTabSelected(tab)
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={cn({ 'is-active': selectedTab.id === tab.id })}
              data-cy="Tab"
              onClick={() => handleClick(tab)}
              aria-hidden="true"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
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
