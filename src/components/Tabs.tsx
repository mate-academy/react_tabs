import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (obj: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      <ul className="tabs__list">
        {tabs.map(tab => (
          <>
            <li key={tab.id} className="tabs__item">
              <button
                type="submit"
                className="tabs__button"
                onClick={() => onTabSelected(tab)}
              >
                {tab.title}
              </button>
              <p className="tabs__content">
                {selectedTabId === tab.id ? tab.content : ''}
              </p>
            </li>
          </>
        ))}
      </ul>
    </>
  );
};
