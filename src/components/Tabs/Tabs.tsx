import classNames from 'classnames';
import React from 'react';

export interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tables: Tab[],
  selectedTabId: string,
  onTabSelected: ((selectedTabId: string) => void),
};

export const Tabs: React.FC<Props> = React.memo(
  ({
    tables,
    selectedTabId = 'tab-1',
    onTabSelected,
  }) => (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tables.map((tab: Tab) => (
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
                onClick={() => onTabSelected(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="tab-content">
        {tables.map((tab) => (
          tab.id === selectedTabId && (
            tab.content
          )
        ))}
      </div>
    </>
  ),
);
