import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab:Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <section className="tabs-container">
      {tabs.map(tab => (
        <div key={tab.id} className="tabs-container__tab">
          <a
            className={classNames('tab-title', { 'tab-title--active': tab.id === selectedTabId })}
            href="/#"
            onClick={(event) => {
              onTabSelected(tab);
              event.preventDefault();
            }}
          >
            {tab.title}
          </a>
        </div>
      ))}
    </section>
  );
};
