import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  tabId: string,
  onSelect: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  tabId,
  onSelect,
}) => {
  const selectedTab = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <>
      <ul className="list">
        {tabs.map(tab => (
          <li
            key={tab.id}
          >
            <button
              type="button"
              className="list__button"
              value={tabId}
              onClick={() => {
                if (tabId !== tab.id) {
                  onSelect(tab);
                }
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <h2>{selectedTab}</h2>
    </>
  );
};
