import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      <div className="buttons is-flex is-flex-direction-row is-align-items-flex-start m-5">
        {tabs.map(tab => (
          <div>
            <button
              type="button"
              className="button is-info"
              onClick={() => {
                if (tab.id !== selectedTabId) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>
      <div className="ml-5">
        {tabs.map(tab => tab.id === selectedTabId && (
          <p className="list__content">
            {tab.content}
          </p>
        ))}
      </div>
    </>
  );
};
