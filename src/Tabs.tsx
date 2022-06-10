import React from 'react';

interface Props {
  tabs: Tab[],
  makingTabId: (tabId: string) => void,
  selectedTabId: string,
}

export const Tabs: React.FC<Props> = ({ tabs, makingTabId, selectedTabId }) => {
  return (
    <div
      className="description-card"
    >
      {
        tabs.map((tab: Tab) => (
          <React.Fragment key={tab.id}>
            <span
              className="btn-container"
            >
              <button
                type="button"
                className={`tab-btn ${tab.id === selectedTabId && 'tab-btn-active'}`}
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    makingTabId(tab.id);
                  }
                }}
              >
                {tab.title}
              </button>
            </span>

            {tab.id === selectedTabId && (
              <p
                data-cy="tab-content"
                className="description-card-content"
              >
                {tab.content}
              </p>
            )}
          </React.Fragment>
        ))
      }
    </div>
  );
};
