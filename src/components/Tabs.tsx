import React, { useEffect } from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void
};

const Tabs:React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  let selectedTab = tabs.find(tab => tab.id === selectedTabId);

  useEffect(() => {
    selectedTab = tabs.find(tab => tab.id === selectedTabId);
  }, [selectedTabId]);

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p>{selectedTab?.content}</p>
    </>
  );
};

export default React.memo(Tabs);
