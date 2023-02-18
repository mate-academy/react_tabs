import React from 'react';
import ClassNames from 'classnames';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (id: string) => void;
};

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => {
  return (
    <ul>
      {
        tabs.map(tab => {
          const { id, title } = tab;
          const isActive = id === selectedTabId;

          return (
            <li
              className={ClassNames({ 'is-active': isActive })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => onTabSelected(id)}
              >
                {title}
              </a>
            </li>
          );
        })
      }
    </ul>
  );
};
