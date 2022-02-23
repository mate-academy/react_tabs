import React, { useEffect } from 'react';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

const Tabs:React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  let selectedTab = tabs.find(tab => tab.id === selectedTabId);

  useEffect(() => {
    selectedTab = tabs.find(tab => tab.id === selectedTabId);
  }, [selectedTabId]);

  return (
    <>
      <ul className="navigation">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              className="button"
              type="button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="line" />
      <p className="text">{selectedTab?.content}</p>
    </>
  );
};

export default React.memo(Tabs);
