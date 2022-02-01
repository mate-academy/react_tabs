import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: Tab;
  handleSelector: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, handleSelector }) => {
  return (
    <div className="Tabs__tab">
      {tabs.map(tab => (
        <button
          key={tab.id}
          type="button"
          className={classNames('Tabs__button',
            { 'Tabs__button--active': tab.id === selectedTabId.id })}
          onClick={() => handleSelector(tab)}
        >
          {tab.title}
        </button>
      ))}
      <p className="Tabs__text">
        {selectedTabId.content}
      </p>
    </div>
  );
};
