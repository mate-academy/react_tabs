import cn from 'classnames';
import React from 'react';

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

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const {
              id,
              title,
            } = tab;

            const isSelected = selectedTab.id === id;

            return (
              <li
                key={id}
                className={cn({ 'is-active': isSelected })}
                data-cy="Tab"
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => !isSelected && onTabSelected(tab)}
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
