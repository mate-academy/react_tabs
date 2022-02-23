import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => (
  <div>
    {tabs.map(tab => {
      const { id, title } = tab;

      return (
        <button
          type="button"
          key={id}
          onClick={() => {
            if (selectedTab.id !== id) {
              onTabSelected(tab);
            }
          }}
        >
          {title}
        </button>
      );
    })}

    <br />

    {selectedTab?.content}
  </div>
);
