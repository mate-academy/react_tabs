import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../react-app-env';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => {
  const isFound = (findtabs: Tab[]) => (
    findtabs.find(tab => (selectedTabId === tab.id))
  );

  const onSelectedTab = (tab: Tab) => (
    selectedTabId !== tab.id && (
      onTabSelected(tab)
    ));

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': tab.id === selectedTabId,
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onSelectedTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {isFound(tabs)?.content}
      </div>
    </div>
  );
};
