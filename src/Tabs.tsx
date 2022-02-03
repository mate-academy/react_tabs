import React from 'react';
import classNames from 'classnames';
import './App.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  choosingTab: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, choosingTab } = props;

  return (
    <div>
      <div className="tabs">
        {tabs.map(tab => (
          <a
            href={tab.id}
            className={classNames('nav-link', {
              active: tab.id === selectedTabId,
            })}
            onClick={event => {
              event.preventDefault();
              choosingTab(tab);
            }}
          >
            {tab.title}
          </a>
        ))}
      </div>
      <p>
        {tabs.find(chosenTab => chosenTab.id === selectedTabId)?.content}
      </p>
    </div>
  );
};
