import React from 'react';
import { Tab } from './react-app-env';

type Props = {
  tabs: Tab[],
  selected: Tab,
  onTabSelect: (target: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selected, onTabSelect }) => (
  <>
    <div>
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          onClick={() => {
            if (tab.id !== selected.id) {
              onTabSelect(tab);
            }
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <p>
      {selected.content}
    </p>
  </>
);
