import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: Tab | undefined
  onTabSelected: (tab: string) => void,
};

// eslint-disable-next-line max-len
export const Tabs:React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <>
      <div className="my-container">
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            className="button is-link is-outlined mr-5"
            onClick={() => onTabSelected(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div data-cy="tab-content" className="my-container mt-6 tab-content">
        {selectedTabId?.content}
      </div>
    </>
  );
};
