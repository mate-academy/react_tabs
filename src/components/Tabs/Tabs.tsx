import classNames from 'classnames';
import React from 'react';

interface TabType {
  id: string,
  title: string,
  content: string
}

type Props = {
  clickTab: TabType,
  tabs: TabType[],
  onClick: (tabId: string) => void,
};

export const Tabs: React.FC<Props> = ({ clickTab, tabs, onClick }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': clickTab.id === tab.id })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                onClick={() => onClick(tab.id)}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {clickTab.content}
      </div>
    </div>
  );
};
