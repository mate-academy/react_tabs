import classNames from 'classnames';
import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
  children,
}) => (
  <>
    <ul className="nav nav-tabs">
      {tabs.map((tab) => (
        <li className="nav-item">
          <button
            className={
              classNames(
                'nav-link',
                { active: tab.id === selectedTabId },
              )
            }
            type="button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    {children}
  </>
);
