import classNames from 'classnames';
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
}) => {
  const clickHandler = (tab: Tab) => {
    if (selectedId !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={classNames('', { 'is-active': selectedId === tab.id })}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => clickHandler(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
