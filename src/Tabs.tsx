import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTab: Tab,
  chooseTab: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, chooseTab }) => {
  return (
    <>
      <ul className="tabs-list">
        {tabs.map(tab => (
          <li key={tab.id} className="tabs-item">
            <button
              className={classNames(
                'button tab-button',
                { 'button tab-button-active': tab.id === selectedTab.id },
              )}
              type="button"
              onClick={() => {
                if (selectedTab.id !== tab.id) {
                  chooseTab(tab);
                }
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="show-tabs">
        {selectedTab.content}
      </div>
    </>
  );
};
