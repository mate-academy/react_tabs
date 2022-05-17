import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (object: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabs__tab"
          >
            <button
              type="button"
              className="tabs__button"
              onClick={() => (onTabSelected(tab))}
            >
              {tab.title}
            </button>
            <p>
              {tab.id === selectedTabId && tab.content}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
