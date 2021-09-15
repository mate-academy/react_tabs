import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTab, onTabSelected } = props;

  return (
    <div>
      {tabs.map(tab => (
        <>
          <button
            key={tab.id}
            type="button"
            value={tab.title}
            onClick={() => onTabSelected(tab)}
            className="btn btn-secondary"
          >
            {tab.title}
          </button>
          <div>
            {selectedTab.id === tab.id && (
              <div>{tab.content}</div>
            )}
          </div>
        </>
      ))}
    </div>
  );
};
