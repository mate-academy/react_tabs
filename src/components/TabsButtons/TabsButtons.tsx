import React from 'react';
import classNames from 'classnames';
import './TabsButtons.scss';

type Props = {
  tabs: Tab[],
  selectedTab: string,
  onClick(title: string, id: string, content: string): void,
};

export const TabsButtons: React.FC<Props> = ({ tabs, selectedTab, onClick }) => (
  <div className="tabs__buttons">
    {
      tabs.map(tab => (
        <button
          key={tab.id}
          id={tab.id}
          className={classNames(
            'tabs__button',
            {
              'tabs__button--active': tab.id === selectedTab,
            },
          )}
          type="button"
          onClick={() => onClick(tab.title, tab.id, tab.content)}
        >
          {tab.title}
        </button>
      ))
    }
  </div>
);
