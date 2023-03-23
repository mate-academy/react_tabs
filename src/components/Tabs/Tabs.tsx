// import classNames from 'classnames';
// import React, { useState } from 'react';

export interface Tab {
  id: string,
  title: string,
  content: string
}

interface TabsProps {
  tabs: Tab[],
  selectedTabId: string
  onTabSelected: (selectedTabId:string)=>void
}

export const Tabs = ({ tabs, selectedTabId, onTabSelected }: TabsProps) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <>
              <li
                className={selectedTabId === tab.id ? 'is-active' : ''}
                key={tab.id}
                data-cy="Tab"
              >
                <a
                  href={`#tab-${selectedTabId}}`}
                  data-cy="TabLink"
                >
                  {tab.title}
                  onClick=
                  {() => onTabSelected(tab.id)}
                </a>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
