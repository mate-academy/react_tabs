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
  onTabSelected: (id: string) => void,
};

export const Tabs:React.FC<Props> = React.memo(
  ({
    tabs,
    selectedTabId,
    onTabSelected,
  }) => {
    const currentTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              const { id, title } = tab;

              return (
                <li
                  key={id}
                  data-cy="Tab"
                  className={classNames({ 'is-active': selectedTabId === id })}
                >
                  <a href={`#${id}`} data-cy="TabLink" onClick={() => currentTab !== tab && onTabSelected(id)}>
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {currentTab.content}
        </div>
      </div>
    );
  },
);
