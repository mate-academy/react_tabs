import React from 'react';
import { Tab } from '../react-app-env';
import './Tabs.scss';

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
    <>
      {tabs.map(tab => (
        <div
          className="container"
          key={tab.id}
        >
          <button
            className="button"
            type="button"
            onClick={() => {
              onTabSelected(tab);
            }}
          >
            {tab.title}
          </button>
        </div>
      ))}
      <p className="text" data-cy="tab-content">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </p>
    </>
  );
};
