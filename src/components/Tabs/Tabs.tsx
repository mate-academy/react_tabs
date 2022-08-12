import React from 'react';
import { TabsType } from '../../type/TabsType';

type Props = {
  tabs: TabsType[],
  selectedTabId: string,
  onTabSelected: (event: React.MouseEvent<HTMLElement>) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const currentTable = tabs.find(table => table.id === selectedTabId)
    || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(table => (
            <li
              key={table.id}
              className={selectedTabId === table.id ? 'is-active' : ''}
            >
              <a
                href={`#${table.id}`}
                id={table.id}
                onClick={onTabSelected}
              >
                {table.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {currentTable.content}
      </div>
    </>
  );
};
