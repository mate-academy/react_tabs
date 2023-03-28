import React from 'react';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[],
  selectedId: string,
  onTabSelected(tab: Tab): void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedId,
  onTabSelected,
}) => (
  <ul>
    {tabs.map(tab => (
      <li
        className={selectedId === tab.id ? 'is-active' : ''}
        data-cy="Tab"
        key={tab.id}
      >
        <a
          href={`#${tab.id}`}
          data-cy="TabLink"
          onClick={() => {
            if (selectedId !== tab.id) {
              onTabSelected(tab);
            }
          }}
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
