import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: Callback;
};

type Callback = (tab: Tab) => void;

export const Tabs:React.FC<Props> = (props) => {
  const { tabs, selectedTabId, onTabSelected } = props;

  return (
    <div className="tabs">
      <div className="tabs__btn">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabSelected(tab)}
          >
            tab title :
            {' '}
            {tab.title}
          </button>
        ))}
      </div>

      <h1>
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </h1>
    </div>
  );
};
