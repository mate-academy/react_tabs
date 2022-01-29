import React from 'react';

type Props = {
  tabs: Tab[]
  selectedTab: Tab | undefined
  onTabSelected: (tabsId: string) => void
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTab, onTabSelected } = props;

  return (
    <div>
      <ul>
        {tabs.map(tab => (
          <span key={tab.id}>
            <button
              className="button is-medium"
              type="button"
              onClick={() => onTabSelected(tab.id)}
            >
              {tab.title}
            </button>
          </span>
        ))}
      </ul>
      <span className="box">
        {selectedTab?.content}
      </span>
    </div>
  );
};
