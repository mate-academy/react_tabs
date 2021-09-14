import React from 'react';
import classNames from 'classnames';

import './tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTab: string;
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
                          { active: tab.id === selectedTab },
                        )
                      }
                      onClick={() => onTabSelected(tab)}
                    >
                      {tab.title}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="tab-content tabs__content-container">
              {tabs.map((tab: Tab) => {
                return (
                  <div
                    key={tab.id}
                    className={
                      classNames(
                        'tab-pane fade',
                        {
                          active: tab.id === selectedTab,
                          show: tab.id === selectedTab,
                        },
                      )
                    }
                  >
                    <strong>{tab.content}</strong>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    <br />
                    Dignissimos ullam ut quas ab tempore nemo nulla delectus magnam, id labore!
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
