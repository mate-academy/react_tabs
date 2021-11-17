/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import cn from 'classnames';
import './Tabs.scss';

type Props = {
  tabs: Tab[]
  selectedTabId: string
  onTabSelected: (tab: Tab) => void
};

const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="Tabs">
      {tabs.map(tab => (
        <button
          className={cn({
            'Tabs--passive': true,
            'Tabs--active': selectedTabId === tab.id,
          })}
          key={tab.id}
          type="button"
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}
      <br />
      <div className="Tabs--content">
        {selectedTab && selectedTab.content}
      </div>
    </div>
  );
};

export default Tabs;
