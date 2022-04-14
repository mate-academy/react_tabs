import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onSelected: (tabId: string) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, onSelected, selectedTabId }) => {
  return (
    <>
      <div className="tab">
        {tabs.map(tab => (
          <button
            className="tablinks"
            type="button"
            onClick={() => {
              if (selectedTabId !== tab.id) {
                onSelected(tab.id);
              }
            }}
            key={tab.id}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tabcontent">
        <p>
          {tabs.find(tab => tab.id === selectedTabId)?.content}
        </p>
      </div>
    </>
  );
};
