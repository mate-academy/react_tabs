import React from 'react';

type Props = {
  tabs: Tab[],
  onContent: (tabId:string) => void
  selectedId: string | undefined
};

export const Tabs: React.FC<Props> = ({ tabs, onContent, selectedId }) => {
  const findSelectedTab = tabs.find(tab => tab.id === selectedId);

  return (
    <>
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            style={{ listStyle: 'none' }}
          >
            <button
              type="submit"
              onClick={() => onContent(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p>{findSelectedTab?.content}</p>
    </>
  );
};
