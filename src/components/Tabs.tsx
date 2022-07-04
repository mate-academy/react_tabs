import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTab: string,
  setTabSelected: (currentTab: Tab) => void,
};

export const Tab: React.FC<Props> = (props) => {
  const {
    tabs,
    selectedTab,
    setTabSelected,
  } = props;

  return (
    <div className="tabs">
      {tabs.map(tab => (
        <div key={tab.id} className="tabs__item">
          <button
            className={classNames(
              'tabs__button',
              { 'tabs__button--active': selectedTab === tab.id },
              { 'tabs__button--noactive': selectedTab !== tab.id },
            )}
            type="button"
            onClick={() => setTabSelected(tab)}
          >
            {tab.title}
          </button>
          {selectedTab === tab.id && (
            <h2 className="tabs__content">
              {tab.content}
            </h2>
          )}
        </div>
      ))}
    </div>
  );
};
