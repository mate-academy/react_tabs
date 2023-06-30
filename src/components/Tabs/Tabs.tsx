import React from 'react';
import classNames from 'classnames';

interface Tab {
  id: string,
  title: string,
  content: string,
}

interface Props {
  tabs: Tab[],
  currentTab: (tab: Tab) => void,
  selected: Tab,
}

export const Tabs: React.FC<Props> = ({ tabs, currentTab, selected }) => {
  function handleTab(selectedTab: Tab, tab: Tab) {
    if (selectedTab !== tab) {
      currentTab(tab);
    }
  }

  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={classNames({
            'is-active': selected === tab,
          })}
          key={tab.id}
          data-cy="Tab"
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => handleTab(selected, tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
