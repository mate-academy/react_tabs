import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabSel: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div className="tabs">
      <ul className="tabs-container">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames(
              'tabs-container__item',
              { 'tabs-container__item--active': tab === selectedTab },
            )}
          >
            <button
              type="button"
              className="tabs-container__button"
              onClick={() => {
                if (tab !== selectedTab) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.id}
            </button>
          </li>
        ))}
      </ul>
      <p>
        {selectedTab.content}
      </p>
    </div>
  );
};
