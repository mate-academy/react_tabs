import React from 'react';
import ClassNames from 'classnames';

type Props = {
  tabs: {
    id: string;
    title: string;
    content: string;
  }[]
  selectedTabId: string;
  getSelectedTabId: (id: string) => void;
};

export const Tabs: React.FC<Props> = (
  { tabs, selectedTabId, getSelectedTabId },
) => {
  return (
    <ul>
      {
        tabs.map(tab => {
          const { id, title } = tab;
          const comparisonId = id === selectedTabId;

          return (
            <li
              className={ClassNames({ 'is-active': comparisonId })}
              data-cy="Tab"
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => getSelectedTabId(id)}
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
