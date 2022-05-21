// import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  setTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  setTabSelected,
}) => (
  <div className="tabs">
    <div>
      {tabs.map(tab => (
        <button
          className={classNames(
            'tabs__button',
            { 'tabs__button--active': tab.id === selectedTabId },
          )}
          type="button"
          key={tab.id}
          onClick={() => {
            setTabSelected(tab);
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>

    <h2 className="tabs__content">
      {tabs.find(tab => tab.id === selectedTabId)?.content}
    </h2>
  </div>
);
