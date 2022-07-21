import classNames from 'classnames';
import React from 'react';

type Props = {
  tabs: Tabs[],
  selectedTab: Tabs,
  onSelectedTab: (tab: Tabs) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onSelectedTab }) => (
  <>
    <div>
      <h1 className="title">
        Selected tab is&nbsp;
        {selectedTab.title}
      </h1>

      <div>
        <div className="tabs is-boxed">
          <ul className="tabs__list">
            {tabs.map(tab => (
              <li
                className={classNames(
                  'tabs__tab',
                  { 'is-active': selectedTab.id === tab.id },
                )}
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  onClick={() => {
                    onSelectedTab(tab);
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="tab-content">
          {selectedTab.content}
        </div>
      </div>
    </div>
  </>
);
