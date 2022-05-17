import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = React.memo(({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => (selectedTabId === tab.id))?.content;

  return (
    <>
      <ul className="tabs">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabs__tab"
          >
            <button
              type="button"
              className="tabs__button"
              onClick={() => {
                if (selectedTabId !== tab.id) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p className="content">{selectedTab}</p>
    </>
  );
});
