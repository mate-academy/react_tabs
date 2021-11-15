import React from 'react';
import { Tab } from '../../react-app-env';
import './tab.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onSelect: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onSelect }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="tabs">
        {tabs.map(tab => {
          return (
            <button
              type="button"
              id={tab.id}
              onClick={() => (onSelect(tab))}
            >
              {tab.title}
            </button>
          );
        })}
      </div>

      <div>
        {selectedTab?.content}
      </div>
    </>
  );
};
