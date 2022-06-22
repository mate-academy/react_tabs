import React from 'react';
import { Tab } from './react-app-env';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <div>
      {tabs.map(tab => (
        <React.Fragment key={tab.id}>
          <button
            type="button"
            onClick={() => {
              if (selectedTabId === tab.id) {
                return;
              }

              onTabSelected(tab);
            }}
          >
            {tab.title}
          </button>
          {tab.id === selectedTabId
          && <p data-cy="tab-content">{tab.content}</p>}
        </React.Fragment>
      ))}
    </div>
  );
};
