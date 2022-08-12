import React from 'react';
import { TabsType } from '../../type/TabsType';

type Props = {
  tabs: TabsType[],
  selectedTabId: string,
  onTabSelected: (selectedTabId: string) => void,
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
                onClick={({ currentTarget }) => onTabSelected(currentTarget.id)}
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
