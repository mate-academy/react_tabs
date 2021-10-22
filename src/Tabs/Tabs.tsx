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
}) => (
  <>
    <div>
      {tabs.map(tab => {
        const { id, title } = tab;

        return (
          <>
            <button
              key={id}
              type="button"
              onClick={() => onTabSelected(tab)}
            >
              {title}
            </button>
          </>
        );
      })}
    </div>
    <p>
      {(tabs.find(tab => tab.id === selectedTabId) || tabs[0]).content}
    </p>
  </>
);
