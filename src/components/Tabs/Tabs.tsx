import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTab: string,
  onClick(title: string, id: string): void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onClick }) => (
  <div className="tabs">
    {
      tabs.map(tab => (
        <div
          id={tab.id}
          key={tab.id}
          className="tabs__tab"
        >
          <button
            id={tab.id}
            className={classNames(
              'tabs__button',
              {
                'tabs__button--active': tab.id === selectedTab,
              },
            )}
            type="button"
            onClick={() => onClick(tab.title, tab.id)}
          >
            {tab.title}
          </button>
          <div
            className={classNames(
              'tabs__tab-content',
              {
                'tabs__tab-content--active': tab.id === selectedTab,
              },
            )}
          >
            {tab.content}
          </div>
        </div>
      ))
    }
  </div>
);
