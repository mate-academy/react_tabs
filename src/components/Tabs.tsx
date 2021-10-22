import React from 'react';
import classnames from 'classnames';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabClick: (id: string) => void,
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabClick }) => {
  return (
    <div>
      {tabs.map(tab => {
        const { id, title } = tab;

        return (
          <button
            type="button"
            key="id"
            className={classnames(
              'tab-btn',
              { 'tab-btn__active': id === selectedTabId },
            )}
            onClick={() => onTabClick(id)}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};
