import React from 'react';
import { Tab, OnTabSelected, PrintContent } from './react-app-env';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: OnTabSelected
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const printContent: PrintContent = (tabId) => {
    return tabs.find(tab => tab.id === tabId)?.content;
  };

  return (
    <>
      <div className="buttons has-addons is-centered">
        {tabs.map(tab => (
          <button
            className="button is-success is-rounded"
            key={tab.id}
            type="button"
            onClick={() => {
              onTabSelected(tab);
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div
        className="content"
        data-cy="tab-content"
      >
        {printContent(selectedTabId)}
      </div>

    </>
  );
};
