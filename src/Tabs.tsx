import React from 'react';

interface Props {
  tabs: {
    id: string;
    title: string;
    content: string;
  }[];
  selectedTabId: string;
  onTabSelected: (tab: { id: string; title: string; content: string }) => void;
}

function Tabs({ tabs, selectedTabId, onTabSelected }: Props) {
  const selectedTab = tabs.find(tab => {
    return tab.id === selectedTabId || tabs[0];
  });

  return (
    <>
      <ul>
        {tabs.map(tab => {
          return (
            <li
              data-cy="Tab"
              className={selectedTabId === tab.id ? 'is-active' : ''}
              key={tab.id}
            >
              <a
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    onTabSelected(tab);
                  }
                }}
                href={`#${tab.id}`}
              >
                {tab.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div data-cy="TabContent">{selectedTab?.content}</div>
    </>
  );
}

export default Tabs;
