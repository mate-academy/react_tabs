import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected(id: string): void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <>
    <div className="tabs is-boxed ">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames({ 'is-active': selectedTab.id === tab.id })}
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              onClick={() => {
                onTabSelected(tab.id);
              }}
            >
              <span>{tab.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="tab-content">{selectedTab.content}</div>
  </>
);
