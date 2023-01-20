import classNames from 'classnames';
import React from 'react';

export type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tables: Tab[],
  selectedTabId: string,
  onSelectedTabId: ((selectedTabId: string) => void),
};

export const Tabs: React.FC<Props> = React.memo(
  ({
    tables,
    selectedTabId,
    onSelectedTabId,
  }) => {
    return (
      <>
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
              onClick={() => onSelectedTabId(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </>
    );
  },
);
