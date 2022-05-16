import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (id: string) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs, selectedTabId, onTabSelected,
}) => {
  const findedTabs = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      {tabs.map(tab => (
        <button type="button" onClick={() => onTabSelected(tab.id)}>
          {tab.title}
        </button>
      ))}
      {findedTabs && (
        <div>
          <hr />
          {findedTabs.content}
        </div>
      )}
    </div>
  );
};
