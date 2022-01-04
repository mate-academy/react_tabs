import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      {tabs.map(tab => (
        <button
          key={tab.id}
          type="button"
          className={classNames('btn', { btn__focus: tab.id === selectedTabId })}
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}
      <p>
        {selectedTab?.content}
      </p>
    </>
  );
};
