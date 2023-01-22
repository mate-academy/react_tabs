import classNames from 'classnames';
import React from 'react';

export interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: ((selectedTabId: string) => void),
};

export const Tabs: React.FC<Props> = React.memo(
  ({
    tabs,
    selectedTabId = 'tab-1',
    onTabSelected,
  }) => (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab: Tab) => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': tab.id === selectedTabId,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.map((tab) => (
          tab.id === selectedTabId && (
            tab.content
          )
        ))}
      </div>
    </>
  ),
);
