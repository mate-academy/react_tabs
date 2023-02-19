import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../types/tab';

type Props = {
  tabs: Tab[];
  selectFunction: (arg0: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectFunction,
  selectedTabId = tabs[0].id,
}) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={classNames({
            'is-active': tab.id === selectedTabId,
          })}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => selectFunction(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
