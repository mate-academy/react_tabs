import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: Tab;
  onTableSelected: (tabId: string) => void;
};

export const Tabs: React.FC<Props> = (props) => {
  const { tabs, onTableSelected, selectedTabId } = props;

  return (

    <>
      <div className="card-link">

        {tabs.map((tab) => {
          return (
            <div key={tab.id}>
              <button
                type="submit"
                className="btn btn-link"
                onClick={() => onTableSelected(tab.id)}
              >
                {tab.title}
              </button>
            </div>
          );
        })}

      </div>

      <div className="card-text">
        {selectedTabId.content}
      </div>
    </>
  );
};
