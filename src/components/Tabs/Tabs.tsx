import React from 'react';
// import classNames from 'classnames';

interface Tab {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};
export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      {tabs.map(tab => (
        <li
          className={tab.id === selectedTabId ? 'is-active' : ''}
          key={tab.id}
          data-cy="Tab"
        >
          <a
            href={`#${tab.id}`}
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </>
  );
};
