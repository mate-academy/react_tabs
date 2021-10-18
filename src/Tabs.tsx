import React from 'react';
import classNames from 'classnames';

interface Props {
  tabs: Tab[]
  onTabSelected: (id: string) => void,
  selectedTabId: string,
}

export const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => {
  return (
    <>
      {
        tabs.map(tab => {
          const { id, title } = tab;

          return (
            <button
              type="button"
              key={id}
              className={classNames('item', { 'is-active': selectedTabId === id })}
              onClick={() => {
                onTabSelected(id);
              }}
            >
              {title}
            </button>
          );
        })
      }
    </>
  );
};
