import React from 'react';
import classNames from 'classnames';

type Tab = {
  id: string;
  title: string;
  content: string;
};

interface Props {
  tabs: Tab[];
  selectedTabID: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabID,
  onTabSelected,
}) => {
  return (
    <ul>
      {
        tabs.map((tab) => (
          <li
            className={classNames('', {
              'is-active': selectedTabID === tab.id,
            })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </a>
          </li>
        ))
      }
    </ul>
  );
};
