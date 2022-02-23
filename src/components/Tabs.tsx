import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      {tabs.map(tab => {
        const { id, title } = tab;

        return (
          <button
            type="button"
            key={id}
            onClick={() => {
              if (selectedTabId !== id) {
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
};
