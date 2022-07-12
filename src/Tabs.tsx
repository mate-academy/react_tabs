import React from 'react';
import classNames from 'classnames';
import { Tab } from './react-app-env';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = React.memo(({
  tabs,
  selectedTabId,
  onTabSelected,
  children,
}) => {
  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li key={tab.id} className="nav-item">
            <button
              type="button"
              onClick={() => onTabSelected(tab)}
              className={classNames(
                'nav-link',
                {
                  active: selectedTabId === tab.id,
                },
              )}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      {children}
    </>
  );
});
