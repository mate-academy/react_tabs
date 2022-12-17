import React from 'react';
import classNames from 'classnames';

type Tab = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  setSelectedTab: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = (
  {
    tabs, selectedTab, setSelectedTab,
  },
) => {
  const handleClick = (tab: Tab) => {
    if (selectedTab.id === tab.id) {
      return;
    }

    setSelectedTab(tab);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames(
                { 'is-active': tab.id === selectedTab.id },
              )}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
