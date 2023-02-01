import classNames from 'classnames';
import React from 'react';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tab: Tab,
  id: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tab, id, onTabSelected }) => {
  return (
    <li
      className={classNames(
        { 'is-active': tab.id === id },
      )}
      data-cy="Tab"
      key={tab.id}
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          if (tab.id !== id) {
            onTabSelected(tab);
          }
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};
