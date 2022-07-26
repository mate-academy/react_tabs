import classNames from 'classnames';
import React from 'react';
import { TabsType } from '../../Type/TabsType';

type Props = {
  tabs: TabsType[],
  selectedTabId: string,
  onTabSelected: (tab: TabsType) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames(
                {
                  'is-active': tab.id === selectedTabId,
                },
              )}
            >
              <a
                href={`#${tab.id}`}
                onClick={() => onTabSelected(tab)}
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
    </>
  );
};
