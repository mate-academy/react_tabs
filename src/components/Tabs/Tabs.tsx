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
  const isCurrent = tabs.some(tab => tab.id === selectedTabId);

  const findSelectedTab = (findtabs: Tab[]) => (
    findtabs.find(tab => (selectedTabId === tab.id))
  );

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames({
                'is-active': tab.id === selectedTabId
                  || (!isCurrent && index === 0),
              })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => selectedTabId !== tab.id && (
                  onTabSelected(tab)
                )}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {findSelectedTab(tabs)?.content}
      </div>
    </div>
  );
};
