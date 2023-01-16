import cn from 'classnames';
import React from 'react';
import { Tab } from '../../type/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected : (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const properTab = tabs.find(element => (
    element.id === selectedTabId
  )) || tabs[0];

  const selectNewTab = (newTab: Tab) => {
    if (newTab.id !== selectedTabId) {
      onTabSelected(newTab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn(
                { 'is-active': properTab?.id === tab.id },
              )}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => selectNewTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {properTab?.content}
      </div>
    </div>
  );
};
