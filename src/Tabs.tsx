import React from 'react';
import { Tab } from './react-app-env';

type Props = {
  tabs: Tab[],
  selected: Tab,
  onChanger: (target: Tab) => void
};

export const Tabs: React.FC<Props> = ({ tabs, selected, onChanger }) => (
    <>
      <div>
        {tabs.map(tab => (
          <button
            type="button"
            onClick={() => {
              if (tab.id !== selected.id) {
                onChanger(tab);
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
};
