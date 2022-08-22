import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected(tab: Tab): void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTab = tabs
    .find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': currentTab.id === tab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
