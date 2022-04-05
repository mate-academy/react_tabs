import React from 'react';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedId: string,
  selectTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = React.memo(({ tabs, selectedId, selectTab }) => {
  return (
    <ul className="list">
      {
        tabs.map(tab => (
          <li
            key={tab.id}
            className="tab"
          >
            <button
              type="button"
              onClick={() => selectTab(tab)}
              className={tab.id === selectedId ? 'button button_selected' : 'button'}
            >
              {tab.title}
            </button>
          </li>
        ))
      }
    </ul>
  );
});
