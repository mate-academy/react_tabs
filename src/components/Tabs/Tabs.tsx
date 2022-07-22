import classNames from 'classnames';
import React from 'react';

export type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabId: string) => void,
  getSelectedTab: () => Tab | undefined,
};

export const Tabs:React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
    getSelectedTab,
  },
) => {
  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                className={
                  classNames({ 'is-active': tab.id === selectedTabId })
                }
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() => onTabSelected(tab.id)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {getSelectedTab()?.content}
      </div>
    </>
  );
};
