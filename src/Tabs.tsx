import React from 'react';
import { Tab } from './react-app-env';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <div>
      {tabs.map(tab => (
        <div key={tab.id}>

          <button
            type="button"
            onClick={() => {
              onTabSelected(tab);
            }}
          >
            {tab.title}
          </button>

        </div>
      ))}

      <div>
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>

    </div>
  );
};
