import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  setSelectedTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  setSelectedTab,
}) => {
  return (
    <ul className="list">
      {
        tabs.map(tab => (
          <li key={tab.id} className="list__item">
            <button
              type="button"
              className="list__button"
              onClick={() => setSelectedTab(tab)}
            >
              {tab.title}
            </button>
            {selectedTabId === tab.id && (
              <p className="list__content">
                {tab.content}
              </p>
            )}
          </li>
        ))
      }
    </ul>
  );
};
