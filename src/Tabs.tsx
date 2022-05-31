import React from 'react';
import './App.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs:React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      <div className="tabs__wrapper">
        {tabs.map(tab => {
          const { id, title } = tab;

          return (
            <button
              type="button"
              className={
                id === selectedTabId
                  ? 'isSelectedTab'
                  : 'tab'
              }
              key={id}
              onClick={() => {
                onTabSelected(tab);
              }}
            >
              {title}
            </button>
          );
        })}
      </div>

      <div
        className="content"
        data-cy="tab-content"
      >
        {tabs.find(elem => elem.id === selectedTabId)?.content}
      </div>
    </>
  );
};
