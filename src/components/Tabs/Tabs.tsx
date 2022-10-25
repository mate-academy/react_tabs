import React from 'react';
import classNames from 'classnames';

export interface Tab {
  id: string,
  title: string,
  content: string
}

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (value: Tab) => void
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const validTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === validTab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== validTab.id) {
                    return onTabSelected(tab);
                  }

                  return tab;
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {validTab.content}
      </div>
    </div>
  );
};
