import classNames from 'classnames';
import React from 'react';

export interface Tab {
  id: string,
  title: string,
  content: string
}

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (value: string) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map((tab) => (
          <li
            className={classNames({ 'is-active': tab.id === selectedTabId })}
            data-cy="Tab"
            key={tab.id}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => {
                if (tab.id !== selectedTabId) {
                  onTabSelected(tab.id);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.map((tab) => (
        tab.id === selectedTabId && (tab.content)
      ))}
    </div>
  </div>
);
