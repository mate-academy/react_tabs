import React from 'react';
import { Tabls } from '../../types/Tabls';

interface Tables {
  tabs: Tabls[];
  selectedTab: number;
  onChangeTab: (param: number)=>void;
}

export const Tabs: React.FC<Tables> = ({ tabs, selectedTab, onChangeTab }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={+tab.id.split('-')[1] === selectedTab ? (
                'is-active'
              ) : (
                ''
              )}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                onClick={() => {
                  const numb = tab.id.split('-')[1];

                  onChangeTab(+numb);
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.content}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        Some text
        {' '}
        {selectedTab}
      </div>
    </div>
  );
};
