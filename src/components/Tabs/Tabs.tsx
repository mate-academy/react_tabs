import React from 'react';
import classNames from 'classnames';

interface Tab {
  id: string;
  title: string;
  content: string;
}

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onSelectTab: (tab: Tab) => void;
};

export const Tabs:React.FC<Props> = ({ tabs, selectedTabId, onSelectTab }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleClick = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      onSelectTab(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === selectedTab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
                id={tab.id}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
