import React from 'react';

type Tab = {
  id: string;
  title: string;
  content: string;
};

interface Props {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelect: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelect,
}) => {
  return (
    <ul>
      {
        tabs.map((tab) => (
          <li
            className={`${selectedTab.id === tab.id ? 'is-active' : ''}`}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => onTabSelect(tab)}
            >
              {tab.title}
            </a>
          </li>
        ))
      }
    </ul>
  );
};
