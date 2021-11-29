import React from 'react';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onChangeTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs, selectedTabId, onChangeTab,
}) => {
  return (
    <>
      <div
        className="Tabs"
      >
        {tabs.map(tab => (
          <button
            className={tab.id === selectedTabId ? 'button-active' : 'button'}
            type="button"
            key={tab.id}
            onClick={() => {
              onChangeTab(tab);
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div
        className="Tab"
      >
        <div
          className="Tab__Content"
        >
          {tabs.find(tab => tab.id === selectedTabId)?.content}
        </div>
      </div>
    </>
  );
};
