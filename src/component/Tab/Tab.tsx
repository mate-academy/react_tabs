import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  onTabSelected(tab: Tab): void;
  selectedTab: Tab;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => (
  <>
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={classNames({ 'is-active': selectedTab.id === tab.id })}
            key={tab.id}
          >
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              onClick={() => {
                onTabSelected(tab);
              }}
            >
              <span>{tab.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div>
      {selectedTab.content}
    </div>
  </>
);
