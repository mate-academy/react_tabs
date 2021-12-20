import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

interface Props {
  tabs: Tab[],
  tabId: string,
  chooseSelectedTab: (tab: Tab) => void
}

export const Tabs: React.FC<Props> = ({
  tabs,
  tabId,
  chooseSelectedTab,
}) => {
  const selectedTab = tabs.find(currentTab => currentTab.id === tabId);

  return (
    <>
      <ul className="Tabs__list">
        {tabs.map(currentTab => (
          <li key={currentTab.id} className="Tabs__element">
            <button
              type="button"
              className={classNames('Tabs__button', { 'Tabs__button--active': tabId === currentTab.id })}
              onClick={() => chooseSelectedTab(currentTab)}
            >
              {currentTab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="Tabs__task">
        {selectedTab?.content}
      </div>
    </>
  );
};
