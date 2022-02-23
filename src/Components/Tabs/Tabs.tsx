import React from 'react';

import './Tabs.scss';

interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[],
  tabsId: string,
  tabsContent: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  tabsId,
  tabsContent,
  onTabSelected,
}) => {
  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li
            className="tabs__item"
            key={tab.id}
          >
            <button
              type="submit"
              className={
                (tabsId !== tab.id)
                  ? 'tabs__item-button'
                  : 'tabs__item-button--active'
              }
              onClick={() => {
                if (tabsId !== tab.id) {
                  onTabSelected(tab);
                }
              }}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p>{tabsContent}</p>
    </div>
  );
};
