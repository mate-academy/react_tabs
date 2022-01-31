import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  handleSelector: (tab: string) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, handleSelector }) => {
  const findTabContent = () => tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div className="Tabs__tab">
      {tabs.map(tab => (
        <>
          <button
            key={tab.id}
            type="button"
            className={classNames('Tabs__button',
              { 'Tabs__button--active': tab.id === selectedTabId })}
            onClick={() => handleSelector(tab.id)}
          >
            {tab.title}
          </button>
        </>
      ))}
      <p className="Tabs__text">
        {findTabContent().content}
      </p>
    </div>
  );
};
