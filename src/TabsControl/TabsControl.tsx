import React from 'react';
import './TabsControl.scss';
import cn from 'classnames';

interface Props {
  tabs: Tab[],
  selectedId: string,
  selectTab: (newTab: string) => void,
}

export const TabsControl: React.FC<Props> = React.memo(
  ({ tabs, selectedId, selectTab }) => {
    return (
      <ul className="list">
        {
          tabs.map(tab => (
            <li
              key={tab.id}
              className="tab"
            >
              <button
                type="button"
                onClick={() => selectTab(tab.id)}
                className={cn('button', { button_selected: tab.id === selectedId })}
              >
                {tab.title}
              </button>
            </li>
          ))
        }
      </ul>
    );
  },
);
