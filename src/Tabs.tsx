import React from 'react';
import classNames from 'classnames';

import './Tabs.css';

interface Props {
  tabs: Tab[];
  selectedTab: Tab;
  chooseTab: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTab, chooseTab } = props;

  return (
    <>
      <ul className="tabs-list">
        {tabs.map(tab => (
          <li key={tab.id} className="tabs-item">
            <button
              className={classNames('tabs-button',
                { 'button-active': tab.id === selectedTab.id })}
              type="button"
              onClick={() => chooseTab(tab)}
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
