import classNames from 'classnames';
import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
  children,
}) => (
  <>
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={
              classNames({ 'is-active': selectedTabId === tab.id })
            }
          >
            <a
              href={`#${tab.id}`}
              onClick={
                () => onTabSelected(tab)
              }
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    {children}
  </>
);
