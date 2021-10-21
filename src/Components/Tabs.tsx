import React from 'react';
import ClassNames from 'classnames';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabClick: (id: string) => void;
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabClick }) => {
  return (
    <div className="tabs__nav">
      {tabs.map(tab => {
        const { id, title } = tab;

        return (
          <button
            type="button"
            key="id"
            className={ClassNames(
              'tab-button',
              { 'tab-button__active': id === selectedTabId },
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
