import React from 'react';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  tabSelected: (tab: Tab) => void
};

export const Tabs:React.FC<Props> = ({ tabs, selectedTabId, tabSelected }) => {
  const selectedContent = tabs.find(tab => tab.id === selectedTabId)?.content;

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
      <p>{selectedContent}</p>
    </>
  );
};
