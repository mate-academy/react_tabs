import React from 'react';

import { Tab } from '../../react-app-env';

type Props = {
  tabs: Tab[],
  selected: string,
  onSelected: (id: string) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selected,
  onSelected,
}) => {
  return (
    <>
      {tabs.map(tab => (
        <li
          className={tab.id === selected ? 'is-active' : ''}
          key={tab.id}
          data-cy="tab-content"
        >
          <a
            href={`#${tab.id}`}
            onClick={() => onSelected(tab.id)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </>
  );
};
