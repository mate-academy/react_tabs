import classNames from 'classnames';
import React from 'react';
import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  selectTab: (currentTab: Tab) => void,
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectTab, selectedTabId } = props;

  return (
    <>
      <div className="buttons">
        {tabs.map(tab => (
          <button
            className={classNames('tabs__btn', { 'tabs__btn--active': tab.id === selectedTabId })}
            type="button"
            key={tab.id}
            onClick={() => selectTab(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <h2 className="tabs__content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </h2>
    </>
  );
};
