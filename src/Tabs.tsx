import React from 'react';
import classNames from 'classnames';
import { Tab } from './react-app-env';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = React.memo(({
  tabs,
  selectedTab,
  onTabSelected,
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
                  active: selectedTab.id === tab.id,
                },
              )}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <h3 data-cy="tab-content">
        {selectedTab.content}
      </h3>
    </>
  );
});
