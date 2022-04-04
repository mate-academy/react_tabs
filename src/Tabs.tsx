import React, { memo } from 'react';
import classNames from 'classnames';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onSelect: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = memo(({ tabs, selectedTabId, onSelect }) => {
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
    </>
  );
});
