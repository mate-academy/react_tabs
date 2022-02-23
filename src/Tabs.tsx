import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void,
};

export const TabPicker:React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTabContent = tabs.find(tab => tab.id === selectedTabId)?.content;

  return (
    <>
      <ul className="list">
        {tabs.map(tab => (
          <li key={tab.id}>

            <button
              type="button"
              key={tab.id}
              onClick={() => {
                if (tab.id !== selectedTabId) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </button>

          </li>
        ))}
      </ul>

      <p className="text">{selectedTabContent}</p>
    </>
  );
};
