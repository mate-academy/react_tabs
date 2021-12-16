import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  onTabSelected: (id: string) => void,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => {
  return (
    <>
      {tabs.map(tab => {
        const { id, title } = tab;

        return (
          <button
            key={id}
            type="button"
            className={classNames('tab', { 'tab--is-active': selectedTabId === id })}
            onClick={() => onTabSelected(id)}
          >
            {title}
          </button>
        );
      })}
    </>
  );
};
