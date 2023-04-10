import classNames from 'classnames';
import React from 'react';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs, onTabSelected,
  selectedTabId,
}) => {
  const handleSubmit = (newTab: Tab) => {
    if (selectedTabId !== newTab.id) {
      onTabSelected(newTab);
    }
  };

  const selectedTab: Tab = tabs
    .find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div
        className="tabs is-boxed"
        style={{ marginBottom: '24px' }}
      >
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={classNames('',
                { 'is-active': selectedTab.id === tab.id })}
            >
              <a
                href={tab.id}
                onClick={(event) => {
                  event.preventDefault();
                  handleSubmit(tab);
                }}
                data-cy="TabLink"
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
