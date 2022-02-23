import React, { useEffect } from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  tabSelected: (tab: Tab) => void
};

export const Tabs:React.FC<Props> = ({ tabs, selectedTabId, tabSelected }) => {
  let selectedTab = tabs.find(tab => tab.id === selectedTabId);

  useEffect(() => {
    selectedTab = tabs.find(tab => tab.id === selectedTabId);
  }, [selectedTabId]);

  return (
    <>
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li key={tab.id} className="tabs__item">
            <button
              className="tabs__bottom"
              type="button"
              onClick={() => tabSelected(tab)}
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
