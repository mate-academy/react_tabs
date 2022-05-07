import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string,
  onTabSelected: (id: string) => void
};

const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {

  const findTab = tabs.find(tab => tab.id === selectedTabId);
  return (
    <>
      {tabs.map(tab => (
        <button type="button" onClick={() => onTabSelected(tab.id)}>
          {tab.title}
        </button>
      ))}
      {findTab && (
        <p>
          {findTab.content}
        </p>
      )}
    </>
  );
};

export default Tabs;
