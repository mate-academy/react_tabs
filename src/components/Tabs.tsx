import React from 'react';
import classNames from 'classnames';

import './tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTab, onTabSelected } = props;

  return (
    <div className="tabs">
      <div className="tabs__container">
        <div className="container">
          <div className="row">
            <ul className="nav nav-tabs">
              {tabs.map((tab: Tab) => {
                return (
                  <li key={tab.id} className="nav-item">
                    <button
                      type="button"
                      className={
                        classNames(
                          'nav-link',
                          { active: tab === selectedTab },
                        )
                      }
                      onClick={() => {
                        if (selectedTab !== tab) {
                          onTabSelected(tab);
                        }
                      }}
                    >
                      {tab.title}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="tab-content tabs__content-container">
              <div
                key={selectedTab.id}
                className="tab-pane
                fade
                active
                show"
              >
                <strong>{selectedTab.content}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
