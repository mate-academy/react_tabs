import React, { useEffect } from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void
};

// eslint-disable-next-line max-len
export const Tabs:React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  let selectedTab = tabs.find(tab => tab.id === selectedTabId);

  useEffect(() => {
    selectedTab = tabs.find(tab => tab.id === selectedTabId);
  }, [selectedTabId]);

  return (
    <div className="box is-large is-centered">
      <ul className="tabs">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={() => onTabSelected(tab)}
              className="button is-link is-normal"
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p className="notification is-warning is-light">{selectedTab?.content}</p>
    </div>
  );
};
