import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedId: string,
  onSelectedTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedId,
  onSelectedTab,
}) => {
  const selectedTabContent = tabs.find(tab => tab.id === selectedId)?.content;

  return (
    <>
      <ul className="list">
        {tabs.map(tab => (
          <li
            key={tab.id}
          >
            <button
              value={selectedId}
              type="button"
              onClick={() => {
                if (selectedId !== tab.id) {
                  onSelectedTab(tab);
                }
              }}
            >
              <span
                className="list__content"
              >
                {tab.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="App__content">
        {selectedTabContent}
      </div>
    </>
  );
};
