import React from 'react';
import classNames from 'classnames';
import { Tab } from '../../Types/Tab';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ 
  tabs, 
  selectedTabId, 
  onTabSelected }) => {
  const handleTabClick = (tab: Tab) => {
    onTabSelected(tab);
  };

  const tabDisplay: { [key: string]: string } = {};

  tabs.forEach(tab => {
    tabDisplay[tab.id] = tab.id === selectedTabId ? 'block' : 'none';
  });

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tab.id === selectedTabId })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {tabs.map(tab => (
        <div
          className="block"
          data-cy="tab-content"
          key={tab.id}
          style={{
            display: tabDisplay[tab.id],
          }}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
