import React from 'react';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  selectTab: (currentTab:Tab) => void;
}

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, selectedTabId, selectTab } = props;

  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li className="nav-item" key={tab.id}>
            <button
              type="button"
              className="nav-link"
              onClick={() => selectTab(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p>
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </>
  );
};
