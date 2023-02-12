import React from 'react';
import cn from 'classnames';

interface Props {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (tab: Tab) => void;
}
export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn({ 'is-active': selectedTab.id === tab.id })}
              data-cy="Tab"
            >
              <a
                onClick={() => onTabSelected(tab)}
                href={`#${selectedTab}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {`Some text ${selectedTab.id.slice(-1)}`}
      </div>
    </div>
  );
};
