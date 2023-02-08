import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../types/tabs';

type Prop = {
  tabs: Tab[]
  isSelected: string;
  handler: (tab: Tab) => void,
};

export const Tabs:React.FC<Prop> = ({
  tabs,
  isSelected,
  handler,
}) => {
  const isSelectedTab = tabs.find(tab => tab.id === isSelected) || tabs[0];
  
  const handleTabClick = (tab: Tab) => {
    if (isSelected !== tab.id) {
      handler(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames(
                { 'is-active': isSelectedTab.id === tab.id },
              )}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isSelectedTab?.content}
      </div>
    </div>
  );
};
