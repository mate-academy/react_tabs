import React from 'react';

type Props = {
  tabs: Tab[];
  onTabSelect: (tab: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, onTabSelect, selectedTabId } = props;

  return (
    <>
      {tabs.map(tab => (
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => {
            onTabSelect(tab);
          }}
        >
          {tab.title}
        </button>
      ))}
      <p>
        {tabs.find((tab) => selectedTabId === tab.id)?.content}
      </p>
    </>
  );
};
