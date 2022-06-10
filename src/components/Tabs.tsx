import React, { useMemo } from 'react';
import Class from 'classnames';

interface Props {
  tabList: Tab[],
  selectedTabId: string,
  onTabSelected: (id: string) => void
}

export const Tabs: React.FC<Props> = React.memo(
  ({ tabList, onTabSelected, selectedTabId }) => {
    const findedTab = useMemo(
      () => tabList.find(tab => tab.id === selectedTabId),
      [selectedTabId],
    );

    const handleClick = (id: string) => {
      if (selectedTabId !== id) {
        onTabSelected(id);
      }
    };

    return (
      <div className="tabs">
        <ul>
          {
            tabList.map(tab => (
              // eslint-disable-next-line
              <li
                key={tab.id}
                className={Class({ 'is-active': tab === findedTab })}
                onClick={() => handleClick(tab.id)}
              >
                {/* eslint-disable-next-line */}
                <a href="#">
                  {tab.title}
                </a>
              </li>
            ))
          }
        </ul>
        <h1>{findedTab?.content}</h1>
      </div>
    );
  },
);
