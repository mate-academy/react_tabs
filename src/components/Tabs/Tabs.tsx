import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': currentTab?.id === tab.id,
              })}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    onTabSelected(tab);
                  }
                }}
                key={tab.id}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {currentTab?.content}
      </div>
    </div>
  );
};
