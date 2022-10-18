import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../interface/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: any,
};

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames(
                '', {
                  'is-active': tab.id === selectedTabId,
                },
              )}
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
        {tabs.find(tab => selectedTabId === tab.id)?.content}
      </div>
    </div>
  );
};
