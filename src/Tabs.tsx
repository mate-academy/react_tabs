import React from 'react';
import classNames from 'classnames';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onSelect: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onSelect }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);
  const selectTab = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onSelect(tab);
    }
  };

  return (
    <>
      <div className="tabs">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
            >
              <button
                className={classNames('button', { 'is-info': selectedTabId === tab.id })}
                type="button"
                onClick={() => selectTab(tab)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="content">
        {selectedTab?.content}
      </div>
    </>
  );
};
