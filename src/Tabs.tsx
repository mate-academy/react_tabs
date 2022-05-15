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
        tabs.map(tabchild => (
          <li key={tabchild.id} className="list__item">
            <button
              type="button"
              className="list__button"
              onClick={() => setSelectedTab(tabchild)}
            >
              {tabchild.title}
            </button>
            {selectedTabId === tabchild.id && (
              <p className="list__content">
                {tabchild.content}
              </p>
            )}
          </li>
        ))
      }
    </ul>
  );
};
