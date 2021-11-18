import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

interface Props {
  selectedTabId: string,
  tabsAll: Tab[],
  onSelectedTabId: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({ tabsAll, selectedTabId, onSelectedTabId }) => {
  return (
    <div className="tabs app__tabs">
      {tabsAll.map(tab => (
        <button
          type="button"
          className={classNames(
            'tabs__tab',
            { 'tabs__tab--active': tab.id === selectedTabId },
          )}
          key={tab.id}
          onClick={() => {
            if (tab.id !== selectedTabId) {
              onSelectedTabId(tab);
            }
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};
