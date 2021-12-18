import React from 'react';

interface Props {
  tabs: Tab[],
  chosenTab: string,
  selectTab: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = React.memo(
  ({ tabs, chosenTab, selectTab }) => {
    return (
      <div className="Tabs">
        {tabs.map(tab => {
          return (
            <div key={tab.id}>
              <button
                type="button"
                onClick={() => tab.id !== chosenTab && selectTab(tab)}
                className="Tabs__button"
              >
                {tab.title}
              </button>

              {tab.id === chosenTab && (
                tab.content
              )}
            </div>
          );
        })}
      </div>
    );
  },
);
