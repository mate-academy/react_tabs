import classNames from 'classnames';
import React from 'react';

interface TabType {
  id: string,
  title: string,
  content: string
}

type Props = {
  clickTabId: string,
  tabs: TabType[],
  onClick: (tabId: string, tabTitle: string) => void,
};

export const Tabs: React.FC<Props> = ({ clickTabId, tabs, onClick }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': clickTabId === tab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() => onClick(tab.id, tab.title)}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {(tabs.find(tab => tab.id === clickTabId) || tabs[0]).content}
      </div>
    </div>
  );
};
