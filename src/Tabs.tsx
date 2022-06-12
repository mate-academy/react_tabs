import React from 'react';

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
  const selectedTab = tabs.find((tab: Tab) => tab.id === selectedTabId);

  return (
    <>
      <ul className="list">
        {tabs.map((tab: Tab) => (
          <li className="list__item" key={tab.id}>

            <button
              type="button"
              className="list__btn"
              onClick={() => {
                if (tab.id !== selectedTabId) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="card card__app">
        <p className="card__content" data-cy="tab-content">
          {selectedTab?.content}
        </p>
      </div>
    </>
  );
};
