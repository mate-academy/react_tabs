import React from 'react';

import classNames from 'classnames';

import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: React.Dispatch<React.SetStateAction<Tab>>;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const isСorrectId = tabs.some(tab => tab.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => {
            const isCurrentTab = selectedTabId === tab.id;

            return (
              <li
                data-cy="Tab"
                key={tab.id}
                className={classNames({
                  'is-active': (selectedTabId === tab.id)
                    || (!isСorrectId && !index),
                })}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => !isCurrentTab && onTabSelected(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </div>
  );
};
