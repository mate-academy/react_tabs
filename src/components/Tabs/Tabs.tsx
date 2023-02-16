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
          const booleanClass = id === selectedTabId;

          return (
            <li
              className={ClassNames({ 'is-active': booleanClass })}
              data-cy="Tab"
            >
              <a
                href={`'#tab-' + ${id}`}
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
