import React from 'react';
import './Tabs.scss';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (x:Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <div>
      {tabs.map((tab) => (
        <button
          className={classNames('tab__button',
            { 'tab__button-active': tab.id === selectedTabId })}
          key={tab.id}
          type="button"
          onClick={
            () => onTabSelected(tab)
          }
        >
          {tab.title}
        </button>
      ))}
      <div className="tab__content">
        {tabs.find(elem => elem.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
