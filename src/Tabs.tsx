import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string,
  onTabSelected: (id: string) => void
};

const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <>
      {tabs.map(tab => (
        <button type="button" onClick={() => onTabSelected(tab.id)}>
          {tab.title}
        </button>
      ))}
      {tabs.filter(tab => tab.id === selectedTabId).map(tab => (
        <p>
          {tab.content}
        </p>
      ))}
    </>
  );
};

export default Tabs;
